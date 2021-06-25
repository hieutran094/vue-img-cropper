<template>
  <div>
    <div
      class="modal fade"
      :class="[{ show: show }]"
      id="crop-modal"
      ref="crop-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="crop-modal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="modal-label" ref="modal-label">
              {{ title }}
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="crop-main" ref="crop-main" id="crop-main">
              <canvas
                id="crop-canvas"
                ref="crop-canvas"
                class="d-none"
              ></canvas>
              <div class="position-absolute">
                <canvas
                  id="canvas"
                  ref="canvas"
                  style="z-index: 1998 "
                ></canvas>
              </div>
              <canvas
                id="background-canvas"
                ref="background-canvas"
                style="z-index: 1997; "
              ></canvas>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row">
              <form class="col-12">
                <label for="resize-slider" class="form-label"
                  >Size Crop
                  <span
                    class="badge rounded-pill bg-primary"
                    :class="[`bg-${type}`]"
                    >{{ radius }} %</span
                  ></label
                >
                <input
                  type="range"
                  class="form-range "
                  :class="[`range-${type}`]"
                  min="20"
                  max="100"
                  step="1"
                  value="100"
                  ref="resize-slider"
                  id="resize-slider"
                  @input="onSliderInput"
                />
              </form>
              <form class="col-12  d-flex justify-content-end">
                <button
                  type="button"
                  class="btn "
                  data-dismiss="modal"
                  @click="closeModal"
                  :class="[
                    `btn${outline ? `-outline` : ``}-secondary`,
                    { [`btn-${btnsize}`]: btnsize },
                  ]"
                >
                  {{ cancel }}
                </button>
                <button
                  type="button"
                  class="btn"
                  id="crop"
                  ref="crop"
                  @click="onCrop"
                  :class="[
                    { [`btn${outline ? `-outline` : ``}-${type}`]: type },
                    { [`btn-${btnsize}`]: btnsize },
                  ]"
                >
                  {{ submit }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal-backdrop fade show"
      id="backdrop"
      ref="backdrop"
      style="display: none;"
    ></div>
    <div class="mb-3">
      <label for="choose-file" class="form-label">{{ label }}</label>
      <input
        class="form-control"
        type="file"
        id="choose-file"
        ref="choose-file"
        :accept="accept"
        @change="onFileChange"
      />
    </div>
  </div>
</template>
<script>
import { cropShape } from "./classes/shape.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "v-img-cropper",
  props: {
    title: {
      type: String,
      default: "Crop your new profile picture",
    },
    label: {
      type: String,
      default: "Choose you picture",
    },
    type: {
      type: String,
      default: "primary",
      validator(x) {
        return (
          [
            "primary",
            "success",
            "secondary",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
            "default",
          ].indexOf(x) !== -1
        );
      },
    },
    accept: {
      type: String,
      default: "image/png, image/jpeg, image/jpg",
    },
    size: {
      type: Number,
      default: 1,
    },
    exportType: {
      type: String,
      default: "Base64",
      validator(x) {
        return ["Base64", "Blob"].indexOf(x) !== -1;
      },
    },
    outputQuality: {
      type: Number,
      default: 0.92,
    },
    outputType: {
      type: String,
      default: "image/jpeg",
    },
    btnsize: {
      type: String,
      validator(x) {
        return ["lg", "sm"].indexOf(x) !== -1;
      },
    },
    outline: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: String,
      default: "Close",
    },
    submit: {
      type: String,
      default: "Crop",
    },
  },
  model: {
    event: "change",
  },
  data() {
    return {
      show: false,
      cropShape: null,
      radius: 100,
    };
  },
  mounted() {
    let container = document.getElementById("canvas");
    let background = document.getElementById("background-canvas");
    let cropArea = document.getElementById("crop-canvas");
    let slider = document.getElementById("resize-slider");
    this.cropShape = new cropShape({
      container: container,
      crop: cropArea,
      background: background,
    });
    this.cropShape.handleRadiusChange(
      function(e) {
        this.radius = Math.round(e);
        slider.value = this.radius;
      }.bind(this)
    );
  },
  methods: {
    openModal() {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
      document.getElementById("backdrop").style.display = "block";
      document.getElementById("crop-modal").style.display = "block";
      setTimeout(() => {
        this.show = true;
        this.cropShape.handleResizeWindown();
      }, 10);
      setTimeout(() => {
        this.cropShape.handleResizeWindown();
      }, 20);
    },
    closeModal() {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
      document.getElementById("backdrop").style.display = "none";
      document.getElementById("crop-modal").style.display = "none";
      this.show = true;
      this.clearFile();
    },
    async onFileChange(event) {
      let file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > this.size * 1024 * 1024) {
          throw `File should be smaller than ${this.size}mb`;
        } else if (
          file.name.indexOf(".jpg") <= 0 &&
          file.name.indexOf(".jpeg") <= 0 &&
          file.name.indexOf(".png") <= 0
        ) {
          throw "We only support PNG, or JPG pictures.";
        }
        let result = await this.toBase64(file);
        let isOpenModal = await this.cropShape.handleFileChange(result);
        if (isOpenModal) this.openModal();
      } catch (err) {
        this.$emit("message", { Status: "False", Message: err, Data: {} });
      }
    },
    onSliderInput(event) {
      this.cropShape.handleSliderChange(event);
    },
    async onCrop() {
      let msg = {};
      try {
        let outputOption = {
          quality: this.outputQuality,
          type: this.exportType,
          file: this.outputType,
        };
        let base64 = await this.cropShape.handleCrop(outputOption);
        if (base64) {
          msg = {
            Status: "Pass",
            Message: "Crop Success",
            Data: base64,
          };
        }
      } catch (err) {
        msg = {
          Status: "False",
          Message: err,
          Data: {},
        };
      } finally {
        this.$emit("message", msg);
        this.closeModal();
      }
    },
    clearFile() {
      let inputs = document.getElementById("choose-file");
      try {
        inputs.value = "";
        if (inputs.value) {
          inputs.type = "text";
          inputs.type = "file";
        }
      } catch (e) {}
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
  },
};
</script>
<style lang="css" scoped>
.wrapper {
  display: block;
  margin: 0 auto;
  overflow-x: hidden;
}

.modal-body {
  overflow-y: auto !important;
  padding: 16px !important;
}

.modal-footer {
  display: grid;
  justify-content: normal;
}

.modal-footer button {
  margin-left: 0.5rem;
}

.crop-main {
  width: 100%;
  max-width: auto;
  height: auto;
  max-height: 350px;
}

/* range-color-chorme */
/* primary */
input[type="range"].range-primary::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #0b5ed7;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-primary::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
input[type="range"].range-primary::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
input[type="range"].range-primary:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(49 132 253 / 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
/* success */
input[type="range"].range-success::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #157347;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-success::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
input[type="range"].range-success::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
input[type="range"].range-success:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(60 153 110 / 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
/* danger */
input[type="range"].range-danger::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #bb2d3b;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-danger::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
input[type="range"].range-danger::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
input[type="range"].range-danger:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(225 83 97 / 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
/* warning */
input[type="range"].range-warning::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #ffc720;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-warning::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
input[type="range"].range-warning::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
input[type="range"].range-warning:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(217 164 6 / 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
/* info */
input[type="range"].range-info::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #25cff2;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-info::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
input[type="range"].range-info::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
input[type="range"].range-info:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(11 172 204/ 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
/* secondary */
input[type="range"].range-secondary::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #565e64;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-secondary::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
input[type="range"].range-secondary::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
input[type="range"].range-secondary:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(130 138 145/ 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
/* dark */
input[type="range"].range-dark::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #1a1e21;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
}
input[type="range"].range-dark::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
input[type="range"].range-dark::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
input[type="range"].range-dark:active::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: rgb(66 70 73 / 50%);
  box-shadow: 0 0 0 1px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
/* range-color-firefox*/
/* primary */
input[type="range"].range-primary::-moz-range-thumb {
  -webkit-appearance: none;
  background: #0b5ed7;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-primary::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
input[type="range"].range-primary::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
input[type="range"].range-primary:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(49 132 253 / 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(49 132 253 / 50%);
}
/* success */
input[type="range"].range-success::-moz-range-thumb {
  -webkit-appearance: none;
  background: #157347;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-success::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
input[type="range"].range-success::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
input[type="range"].range-success:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(60 153 110 / 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(60 153 110 / 50%);
}
/* danger */
input[type="range"].range-danger::-moz-range-thumb {
  -webkit-appearance: none;
  background: #bb2d3b;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-danger::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
input[type="range"].range-danger::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
input[type="range"].range-danger:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(225 83 97 / 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(225 83 97 / 50%);
}
/* warning */
input[type="range"].range-warning::-moz-range-thumb {
  -webkit-appearance: none;
  background: #ffc720;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-warning::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
input[type="range"].range-warning::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
input[type="range"].range-warning:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(217 164 6 / 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(217 164 6 / 50%);
}
/* info */
input[type="range"].range-info::-moz-range-thumb {
  -webkit-appearance: none;
  background: #25cff2;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-info::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
input[type="range"].range-info::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
input[type="range"].range-info:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(11 172 204/ 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(11 172 204 / 50%);
}
/* secondary */
input[type="range"].range-secondary::-moz-range-thumb {
  -webkit-appearance: none;
  background: #565e64;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-secondary::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
input[type="range"].range-secondary::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
input[type="range"].range-secondary:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(130 138 145/ 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(130 138 145 / 50%);
}
/* dark */
input[type="range"].range-dark::-moz-range-thumb {
  -webkit-appearance: none;
  background: #1a1e21;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
input[type="range"].range-dark::-moz-range-thumb:hover {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
input[type="range"].range-dark::-moz-range-thumb:focus {
  -webkit-appearance: none;
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
input[type="range"].range-dark:active::-moz-range-thumb {
  -webkit-appearance: none;
  background: rgb(66 70 73 / 50%);
  box-shadow: 0 0 0 1.5px #fff, 0 0 0 4px rgb(66 70 73 / 50%);
}
</style>

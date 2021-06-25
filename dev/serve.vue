<template>
  <div id="app">
    <div class="container ">
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <div class="card " style="width: 28rem; top:50px">
            <div class="card-header ">
              <h4>Signup</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputname" class="form-label"
                    >User name</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputname"
                    aria-describedby=""
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="row">
                  <div class="col-6">
                    <v-img-cropper
                      type="primary"
                      title="Crop your new profile picture"
                      @message="handlerMessage"
                    />
                  </div>
                  <div class="col-2">
                    <div class="mb-3">
                      <label for="" class="form-label">Preview:</label>
                    </div>
                  </div>
                  <div class="col-4 d-flex align-items-center">
                    <button
                      class="btn shadow-none btn-avatar"
                      type="button"
                      id="preview"
                    >
                      <img
                        class="rounded-circle img-fluid "
                        src="https://avatars.githubusercontent.com/u/84322691?s=60&v=4"
                        style="height:68px;width:68px"
                      />
                    </button>
                  </div>
                </div>

                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    I accept the <a href="#">Terms of Use</a> &amp;
                    <a href="#">Privacy Policy</a></label
                  >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default Vue.extend({
  name: "ServeDev",
  data() {
    return { base64: null };
  },
  methods: {
    handlerMessage(e) {
      if (e.Status == "Pass") {
        console.log(e.Data);
        var image = new Image();
        image.onload = function() {
          console.log(image.width);
        };
        image.src = e.Data;
        var preview = document.getElementById("preview");
        preview.removeChild(preview.childNodes[0]);
        preview.appendChild(image);
      } else {
        console.log(e.Message);
        alert(e.Message);
      }
    },
  },
  watch: {
    base64: {
      handler: function() {
        console.log(this.base64);
      },
      deep: true,
      immediate: false,
    },
  },
});
</script>

<style lang="css">
body {
  background: #5eaaa8;
}
.btn-avatar {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
.avatar {
  object-fit: cover;
}
.btn-avatar:active,
.btn-avatar:focus,
.btn-avatar:hover {
  border: none !important;
  outline: none !important;
  background-color: Transparent !important;
}
#preview img {
  height: 68px;
  width: 68px;
  border-radius: 50% !important;
  max-width: 100%;
}
</style>

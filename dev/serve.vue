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
                <v-img-cropper
                  type="primary"
                  title="Crop your new profile picture"
                  @message="handlerMessage"
                />
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
// Uncomment import and local "components" registration if library is not registered globally.
// import { VImgCropperSample } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev",
  data() {
    return { base64: null };
  },
  methods: {
    handlerMessage(e) {
      if (e.Status == "Pass") {
        console.log(e.Data)
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
</style>

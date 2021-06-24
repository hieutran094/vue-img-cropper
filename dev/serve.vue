<script>
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
// Uncomment import and local "components" registration if library is not registered globally.
// import { VImgCropperSample } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev",
  // components: {
  //  VImgCropperSample,
  // }
  data() {
    return { base64: null };
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

<template>
  <div id="app">
    <div class="container ">
    <div class="row">
      <div class="col-6">
        <v-img-cropper
          v-model="base64"
          type="success"
          title="Crop your new profile picture"
        />
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
</style>

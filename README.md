<div align="center">
  <h1 >vue image cropper</h1>

<p > 💪 Easy to crop and resize your picture before upload.</p>
  <br/>
  
<img  src="https://user-images.githubusercontent.com/84322691/123398701-080d4a00-d5ce-11eb-91d7-368e63fd0437.gif" width="50%"/>
</div>


## Basic usage

```html
<v-img-cropper
  type="primary"
  title="Crop your new profile picture"
  @message="handlerMessage"
/>
```
## Installation

### Node environment

1. Install the package:

   ```sh
   npm install v-img-cropper
   # or
   yarn add v-img-cropper
   ```

2. Register it:

   ```js
   import VImgCropper from "v-img-cropper";
   
   // or
   const VImgCropper = require('v-img-cropper');


   Vue.component(VImgCropper);
   
   //or
   new Vue({
       components: { VImgCropper },
       // ... 
   });
   ```

### Props

 Property Name | Type | Description
 -------- | -------- | --------
 `title` | String | The Title in crop modal.
 `label` | String | Lable for imput choose file.
 `type` | String | Color type follow bootstrap color. Allowed: <br>`primary,success,secondary,danger,warning,info,light,dark,default`  <br>default: `primary`
 `accept` | String | Allowed image formats, default: <br>`image/png, image/jpeg, image/jpg`
 `size` | Number | Max file size can select (MB), default: `1`
 `exportType` | String | Export type. Allowed:`Base64 , Blob` .default: `Base64`
 `outputQuality` | Number | A Number between 0 and 1 indicating image quality if the requested .<br>default: `0.92`
 `outputType` | String | Image export type file, default: `image/jpeg`
 `btnsize` | String | Size for button on Crop Modal. Allowed: `lg,sm`
 `outline` | Boolean | Is button outline on Crop Modal, default: `false`
 `cancel` | String | Text on Cancel button in Modal
 `submit` | String | Text on Submit button in Modal

### Events


- **message** return all message and result, params:
    - `e` The Object message return:  ```{ Status: "False", Message: err, Data: {} }```

### Example:

```html
    <v-img-cropper
    type="primary"
    title="Crop your new profile picture"
    @message="handlerMessage"
    />
```


```js
export default{
  methods: {
    handlerMessage(e) {
      //Status return ["Pass | False"]
      if (e.Status == "Pass") { 
        //Data return (base64 | blob)
        console.log(e.Data);
        var image = new Image();
        image.onload = function() {
        };
        image.src = e.Data; 
        var preview = document.getElementById("preview");
        preview.removeChild(preview.childNodes[0]);
        preview.appendChild(image);
      } else {
        //Message return
        console.log(e.Message);
        alert(e.Message);
      }
    },
  },
}
```
## License

MIT


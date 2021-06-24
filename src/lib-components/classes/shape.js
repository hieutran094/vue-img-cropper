class shape {
  constructor(o) {
    this.container = o.container;
    this.img = o.img ? o.img : null;
    this.height = o.height ? o.height : 0;
    this.width = o.width ? o.width : 0;
    this.radius = o.radius ? o.radius : 0;
    this.imgSrc = o.imgSrc ? o.imgSrc : "";
    this.isReady = false;
    this.isError = false;
    this.centerCoordinates = o.centerCoordinates ? o.centerCoordinates : {};
    this.init();
  }
  init() {
    if (this.img == null) {
      this.img = new Image();
      if (this.imgSrc != "") this.img.src = this.imgSrc;
      this.img.onload = this.loadCallback.bind(this);
      this.img.onerror = function(err) {
        this.isReady = false;
        this.isError = true;
      };
    } else {
      isReady = true;
    }
  }
  loadCallback() {
    if (this.height == 0 || this.width == 0) {
      this.height = this.img.height;
      this.width = this.img.width;
    }
    this.isReady = true;
  }
  async draw(cd) {
    while (!this.isReady && !this.isError) {
      await this.sleep(1);
    }
    if (this.isReady) {
      let ctx = this.container.getContext("2d");
      ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width,
        this.img.height,
        cd.x,
        cd.y,
        this.width,
        this.height
      );
    }
  }
  sleep(Millis) {
    return new Promise((resolve) => setTimeout(resolve, Millis));
  }
}
class moveShape extends shape {
  constructor(o) {
    let obj = Object.assign(
      {
        imgSrc:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA0ODIuMjM5IDQ4Mi4yMzkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0MS4xMTkgMC02OC44OTEgNjguODkxaDUxLjY2OHYxMDMuMzM3aDM0LjQ0NnYtMTAzLjMzN2g1MS42Njh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQxLjExOSA0ODIuMjM5IDY4Ljg5MS02OC44OTFoLTUxLjY2OHYtMTAzLjMzN2gtMzQuNDQ2djEwMy4zMzdoLTUxLjY2OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiLz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00ODIuMjM5IDI0MS4xMTktNjguODkxLTY4Ljg5MXY1MS42NjhoLTEwMy4zMzd2MzQuNDQ2aDEwMy4zMzd2NTEuNjY4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTAgMjQxLjExOSA2OC44OTEgNjguODkxdi01MS42NjhoMTAzLjMzN3YtMzQuNDQ2aC0xMDMuMzM3di01MS42Njh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPgo=",
        height: 24,
        width: 24,
      },
      o
    );
    super(obj);
  }
  draw(rawCoordinates) {
    this.centerCoordinates = rawCoordinates;
    let c = this.calculationDraw();
    super.draw(c);
  }
  calculationDraw() {
    let coordinates = {};
    coordinates.x = this.centerCoordinates.x - this.width / 2;
    coordinates.y = this.centerCoordinates.y - this.height / 2;
    return coordinates;
  }
}
class resizeShape extends shape {
  constructor(o) {
    let obj = Object.assign(
      {
        imgSrc:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIuMDczIDUxMi4wNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM3MS42NiA2NC4xMzRjLTcuNTk3LTQuNTE1LTEwLjA5NC0xNC4zMzMtNS41NzktMjEuOTI5IDQuNTE1LTcuNTk3IDE0LjMzMi0xMC4wOTUgMjEuOTI5LTUuNTc5LjY4MS40MDQgMS4zNTEuODEyIDIuMDIzIDEuMjI5IDE2Ljg1MyAxMC40NzQgMy4xOTIgMzkuMTA4LTE4LjM3MyAyNi4yNzl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTcuMzQ0IDMxNi42NTdjLTE5LjMyNi03OS4yMzMuNDI1LTE1OS42NDggNDguMjgtMjE5LjkzOCA2OS40NzYtODcuNTQ4IDE4My40NTYtMTE2LjI1MSAyODEuMTYxLTgzLjY5NCA4LjM4MyAyLjc5NCAxMi45MTQgMTEuODU0IDEwLjEyMSAyMC4yMzgtMi43OTQgOC4zODMtMTEuODUzIDEyLjkxLTIwLjIzOCAxMC4xMjEtODUuNjQyLTI4LjU0MS0xODUuMzM0LTMuMTkyLTI0NS45NzkgNzMuMjI5LTg0Ljc1IDEwNi43Ny01NS4wOTUgMjYxLjQzNyA1OS4wMTQgMzMwLjc5OCA1MS4yMDQgMzEuMTIzIDExMS4zODggNDAuMzYyIDE2OS40MjggMjYuMjA3IDExOC4xMDItMjguODA2IDE5NC4yNjYtMTQ4LjgyNSAxNjQuNTQyLTI3MC42OTktMTAuMDcyLTQxLjI5Ny0zMS40ODMtNzguNjQ0LTYxLjkxNy0xMDguMDAxLTYuMzU5LTYuMTM1LTYuNTQyLTE2LjI2NS0uNDA3LTIyLjYyNHMxNi4yNjMtNi41NDIgMjIuNjI0LS40MDdjOTkuMTM3IDk1LjYzNCAxMDYuMzMxIDI1Ni42MDEgNy41NzQgMzYwLjU4Ni0xMzkuMDQgMTQ2LjQwMS0zODYuMTk1IDgxLjAyMS00MzQuMjAzLTExNS44MTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyNi42NTcgMzAzLjk0aDYuNjI4YzguODM3IDAgMTYtNy4xNjMgMTYtMTZzLTcuMTYzLTE2LTE2LTE2aC00NS4yNTVjLTQuODAxIDAtOS41OTcgMi4xNjYtMTIuNzc3IDYuMzk4LTQuMzA3IDUuNjk2LTMuMjIzIDYuMTU2LTMuMjIzIDU0Ljg1NiAwIDguODM3IDcuMTYzIDE2IDE2IDE2czE2LTcuMTYzIDE2LTE2di02LjYyOGwyMC42ODcgMjAuNjg3YzMuMTI0IDMuMTI0IDcuMjE5IDQuNjg3IDExLjMxMyA0LjY4NyAxNC4xMjUgMCAyMS40MjQtMTcuMjA1IDExLjMxMy0yNy4zMTN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjcyLjExIDIyNS41MjJjLjQ3NSA0LjgzNSAzLjE3MSA5LjQxNyA3LjcwNCAxMi4xMyA1LjExMSAzLjA1NyA0LjAxNyAyLjI4OSA1My40NzEgMi4yODkgOC44MzcgMCAxNi03LjE2MyAxNi0xNnMtNy4xNjMtMTYtMTYtMTZoLTYuNjI4bDIwLjY4Ny0yMC42ODdjNi4yNDktNi4yNDggNi4yNDktMTYuMzc5IDAtMjIuNjI3LTYuMjQ4LTYuMjQ4LTE2LjM3OS02LjI0OC0yMi42MjcgMGwtMjAuNjg3IDIwLjY4N3YtNi42MjhjMC04LjgzNy03LjE2My0xNi0xNi0xNnMtMTYgNy4xNjMtMTYgMTZjMCA0OS4zMS0uMDM1IDQ1LjY3NS4wOCA0Ni44MzZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQwLjAzIDE3OC42ODZjMC04LjgzNy03LjE2My0xNi0xNi0xNnMtMTYgNy4xNjMtMTYgMTZ2Ni42MjhsLTIwLjY4Ny0yMC42ODdjLTYuMjQ4LTYuMjQ4LTE2LjM3OS02LjI0OC0yMi42MjcgMC02LjI0OSA2LjI0OC02LjI0OSAxNi4zNzkgMCAyMi42MjdsMjAuNjg3IDIwLjY4N2gtNi42MjhjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZjNDguNTI3IDAgNDcuNDQuNDIxIDUxLjM3NC0xLjIxOCAyLjYyOS0xLjA5MSA0Ljg2Ni0yLjgwNCA2LjY1Ni01LjE3OSA0LjMxMy01Ljc0MSAzLjIyNS02LjA4OCAzLjIyNS01NC44NTh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjM5Ljk1IDI4Ni4zNTljLS40NzItNC44MDItMy4xMzktOS4zOTMtNy42OTgtMTIuMTI2LTUuMDcyLTMuMDY2LTQuMTgtMi4yOTMtNTMuNDc3LTIuMjkzLTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZoNi42MjhsLTIwLjY4NyAyMC42ODdjLTEwLjEwOSAxMC4xMDgtMi44MTIgMjcuMzEzIDExLjMxMyAyNy4zMTMgNC4wOTUgMCA4LjE4OS0xLjU2MyAxMS4zMTMtNC42ODdsMjAuNjg3LTIwLjY4N3Y2LjYyOGMwIDguODM3IDcuMTYzIDE2IDE2IDE2czE2LTcuMTYzIDE2LTE2Yy4wMDEtNDkuMzA5LjAzNi00NS42NzQtLjA3OS00Ni44MzV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjwvc3ZnPgo=",
        height: 24,
        width: 24,
      },
      o
    );
    super(obj);
    this.coordinates = {};
    this.parentRadius = null;
    this.rotate = obj.rotate ? obj.rotate : 45;
  }
  setSize(s) {
    this.height = s;
    this.width = s;
  }
  draw(obj) {
    this.centerCoordinates = obj.coordinates;
    this.radius = obj.parentRadius;
    this.calculationDraw();
    super.draw(this.coordinates);
  }
  calculationDraw() {
    this.coordinates.x =
      Math.cos((this.rotate * Math.PI) / 180) * this.radius +
      this.centerCoordinates.x;
    this.coordinates.y =
      this.centerCoordinates.y +
      Math.sin((this.rotate * Math.PI) / 180) * this.radius;
  }
  isTouch(coordinates) {
    return (
      (coordinates.x - this.coordinates.x - 12) ** 2 +
        (coordinates.y - this.coordinates.y - 12) ** 2 <=
      12 ** 2
    );
  }
}
class cropShape extends shape {
  constructor(o) {
    super(o);
    this.crop = o.crop ? o.crop : document.createElement("canvas");
    this.targetImg = null;
    this.moveIcon = null;
    this.resizeIcon = null;
    this.background = o.background ? o.background : null;
    this.maxRadius = null;
    this.mouseDownCoordinates = {};
    this.originalCoordinates = {};
    this.originalRadius = 0;
    this.containerOffset = {};
    this.isDrag = false;
    this.isResize = false;
    this.callback = null;
    this.init();
  }
  setRadius(r) {
    this.radius = r * 2 > this.width || r * 2 > this.height ? this.radius : r;
    let minRadius = this.maxRadius * (20 / 100);
    this.radius = minRadius > this.radius ? minRadius : this.radius;
    this.keepCenterInside();
    let callbackValue = this.getRadius();
    if (this.callback != null) this.callback(callbackValue);
  }
  getRadius() {
    return (this.radius / this.maxRadius) * 100;
  }
  setWidth(w) {
    this.width = w;
    this.height = Math.round(this.img.height / (this.img.width / this.width));
    this.maxRadius =
      this.width > this.height ? this.height / 2 : this.width / 2;
    this.centerCoordinates.x = this.width / 2;
    this.centerCoordinates.y = this.height / 2;
    this.setRadius(this.maxRadius)
    this.container.height = this.height;
    this.container.width = this.width;
    this.background.height = this.height;
    this.background.width = this.width;
  }
  init() {
    this.isReady = true;
    this.img = document.createElement("canvas");
    this.moveIcon = new moveShape({ container: this.container });
    this.resizeIcon = new resizeShape({ container: this.container });
    this.container.onmousemove = function(event) {
      this.handleMouseMove(event);
    }.bind(this);
    this.container.onmousedown = function(event) {
      this.handleMouseDown(event);
    }.bind(this);
    this.container.onmouseup = function(event) {
      this.handleMouseUp(event);
    }.bind(this);
    this.container.onmouseout = function(event) {
      this.handleMouseOut(event);
    }.bind(this);
    this.container.addEventListener(
      "touchstart",
      function(event) {
        this.handleMouseDown(event);
      }.bind(this),
      true
    );
    this.container.addEventListener(
      "touchmove",
      function(event) {
        this.handleMouseMove(event);
      }.bind(this),
      true
    );
    this.container.addEventListener(
      "touchend",
      function(event) {
        this.handleMouseUp(event);
      }.bind(this),
      true
    );
    window.onresize = function() {
      this.handleResizeWindown();
    }.bind(this);
  }
  draw() {
    let ctx = this.container.getContext("2d");
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = "#fff";
    this.resizeIcon.draw({
      parentRadius: this.radius,
      coordinates: this.centerCoordinates,
    });
    ctx.lineWidth = 2;
    ctx.arc(
      this.centerCoordinates.x,
      this.centerCoordinates.y,
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.clip();
    ctx.imageSmoothingQuality = "high";
    super.draw({ x: 0, y: 0 });
    this.moveIcon.draw(this.centerCoordinates);
    ctx.restore();
  }
  drawBackground() {
    let octx = this.img.getContext("2d");
    let steps = (this.img.width / this.width) >> 1;
    octx.clearRect(0, 0, this.img.width, this.img.height);
    octx.filter = `blur(${steps}px)`;
    octx.drawImage(this.targetImg, 0, 0);
    let ctxImg = this.background.getContext("2d");
    ctxImg.clearRect(0, 0, this.width, this.height);
    ctxImg.imageSmoothingQuality = "high";
    ctxImg.filter = "brightness(60%)";
    ctxImg.drawImage(this.img, 0, 0, this.width, this.height);
  }
  getElementOffset(element) {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    var left = box.left + window.pageXOffset - de.clientLeft;
    return { top: top, left: left };
  }
  keepCenterInside() {
    if (this.radius > this.centerCoordinates.x)
      this.centerCoordinates.x += this.radius - this.centerCoordinates.x;
    else if (this.radius > this.width - this.centerCoordinates.x)
      this.centerCoordinates.x -=
        this.radius - (this.width - this.centerCoordinates.x);
    if (this.radius > this.centerCoordinates.y)
      this.centerCoordinates.y += this.radius - this.centerCoordinates.y;
    else if (this.radius > this.height - this.centerCoordinates.y)
      this.centerCoordinates.y -=
        this.radius - (this.height - this.centerCoordinates.y);
  }
  isTouch(obj) {
    return (
      (obj.x - this.centerCoordinates.x) ** 2 +
        (obj.y - this.centerCoordinates.y) ** 2 <=
      this.radius ** 2
    );
  }
  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.containerOffset = this.getElementOffset(this.container);
    if (event.type === "touchstart") {
      this.mouseDownCoordinates = {
        x: parseInt(event.touches[0].pageX - this.containerOffset.left),
        y: parseInt(event.touches[0].pageY - this.containerOffset.top),
      };
    } else {
      this.mouseDownCoordinates = {
        x: parseInt(event.pageX - this.containerOffset.left),
        y: parseInt(event.pageY - this.containerOffset.top),
      };
    }
    this.originRadius = this.radius;
    this.originalCoordinates = this.centerCoordinates;
    this.isDrag = this.isTouch(this.mouseDownCoordinates);
    this.isResize = this.resizeIcon.isTouch(this.mouseDownCoordinates);
  }
  handleMouseMove(event) {
    event.preventDefault();
    event.stopPropagation();
    let coordinatesMouse = {};
    let offset = {};
    this.containerOffset = this.getElementOffset(this.container);
    if (event.type === "touchmove") {
      coordinatesMouse = {
        x: parseInt(event.touches[0].pageX - this.containerOffset.left),
        y: parseInt(event.touches[0].pageY - this.containerOffset.top),
      };
    } else {
      coordinatesMouse = {
        x: parseInt(event.pageX - this.containerOffset.left),
        y: parseInt(event.pageY - this.containerOffset.top),
      };
    }
    offset = {
      x: coordinatesMouse.x - this.mouseDownCoordinates.x,
      y: coordinatesMouse.y - this.mouseDownCoordinates.y,
    };
    let moveOverImage = this.isTouch(coordinatesMouse);
    let resizeImage = this.resizeIcon.isTouch(coordinatesMouse);
    if (resizeImage) {
      this.container.style.cursor = "nw-resize";
    } else if (moveOverImage) {
      this.container.style.cursor = "move";
    } else {
      this.container.style.cursor = "default";
    }
    if (this.isDrag) {
      let dx = 0,
        dy = 0;
      if (this.originalCoordinates.x + offset.x + this.radius > this.width) {
        dx = this.width - this.radius;
      } else if (this.originalCoordinates.x + offset.x - this.radius < 0) {
        dx = this.radius;
      } else {
        dx = this.originalCoordinates.x + offset.x;
      }
      if (this.originalCoordinates.y + offset.y + this.radius > this.height) {
        dy = this.height - this.radius;
      } else if (this.originalCoordinates.y + offset.y - this.radius < 0) {
        dy = this.radius;
      } else dy = this.originalCoordinates.y + offset.y;
      this.centerCoordinates = { x: dx, y: dy };
      this.draw();
    }
    if (this.isResize) {
      let size =
        offset.x > offset.y
          ? this.originRadius + offset.y
          : this.originRadius + offset.x;
      this.setRadius(size);
      this.draw();
    }
  }
  handleMouseUp(event) {
    this.isDrag = false;
    this.isResize = false;
    this.isGetOffset = true;
  }
  handleMouseOut(event) {
    this.handleMouseUp(event);
  }
  handleResizeWindown() {
    let positionInfo = Math.round(
      document.getElementById("crop-main").getBoundingClientRect().width
    );
    this.setWidth(Math.round(positionInfo));
    this.drawBackground();
    this.draw();
  }
  handleFileChange(event) {
    return new Promise((result, reject) => {
      let i = new Image();
      i.src = event;
      i.onload = function() {
        this.targetImg = i;
        this.img.width = i.width;
        this.img.height = i.height;
        result(true);
      }.bind(this);
      i.onerror = function(error) {
        reject(error);
      };
    });
  }
  handleSliderChange(event) {
    this.setRadius(this.maxRadius * (parseInt(event.target.value) / 100));
    this.draw();
  }
  handleCrop() {
    let crop_ctx = this.crop.getContext("2d");
    let x =
      (this.centerCoordinates.x - this.radius) * (this.img.width / this.width);
    let y =
      (this.centerCoordinates.y - this.radius) *
      (this.img.height / this.height);
    let w = this.radius * 2 * (this.img.width / this.width);
    let h = this.radius * 2 * (this.img.height / this.height);
    let result = "";
    this.crop.width = this.radius * 2;
    this.crop.height = this.radius * 2;
    crop_ctx.imageSmoothingQuality = "high";
    crop_ctx.drawImage(
      this.img,
      x,
      y,
      w,
      h,
      0,
      0,
      this.radius * 2,
      this.radius * 2
    );
    result = this.crop.toDataURL("image/jpeg", 1.0);
    return result;
  }
  handleRadiusChange(cb) {
    if (cb) {
      this.callback = cb;
    }
  }
}
export { cropShape };

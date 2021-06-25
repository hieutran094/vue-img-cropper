'use strict';function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var shape = /*#__PURE__*/function () {
  function shape(o) {
    _classCallCheck(this, shape);

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

  _createClass(shape, [{
    key: "init",
    value: function init() {
      if (this.img == null) {
        this.img = new Image();
        if (this.imgSrc != "") this.img.src = this.imgSrc;
        this.img.onload = this.loadCallback.bind(this);

        this.img.onerror = function (err) {
          this.isReady = false;
          this.isError = true;
        };
      } else {
        isReady = true;
      }
    }
  }, {
    key: "loadCallback",
    value: function loadCallback() {
      if (this.height == 0 || this.width == 0) {
        this.height = this.img.height;
        this.width = this.img.width;
      }

      this.isReady = true;
    }
  }, {
    key: "draw",
    value: function () {
      var _draw = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cd) {
        var ctx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.isReady && !this.isError)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.sleep(1);

              case 3:
                _context.next = 0;
                break;

              case 5:
                if (this.isReady) {
                  ctx = this.container.getContext("2d");
                  ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, cd.x, cd.y, this.width, this.height);
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function draw(_x) {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
  }, {
    key: "sleep",
    value: function sleep(Millis) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, Millis);
      });
    }
  }]);

  return shape;
}();

var moveShape = /*#__PURE__*/function (_shape) {
  _inherits(moveShape, _shape);

  var _super = _createSuper(moveShape);

  function moveShape(o) {
    _classCallCheck(this, moveShape);

    var obj = Object.assign({
      imgSrc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA0ODIuMjM5IDQ4Mi4yMzkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI0MS4xMTkgMC02OC44OTEgNjguODkxaDUxLjY2OHYxMDMuMzM3aDM0LjQ0NnYtMTAzLjMzN2g1MS42Njh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQxLjExOSA0ODIuMjM5IDY4Ljg5MS02OC44OTFoLTUxLjY2OHYtMTAzLjMzN2gtMzQuNDQ2djEwMy4zMzdoLTUxLjY2OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiLz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00ODIuMjM5IDI0MS4xMTktNjguODkxLTY4Ljg5MXY1MS42NjhoLTEwMy4zMzd2MzQuNDQ2aDEwMy4zMzd2NTEuNjY4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTAgMjQxLjExOSA2OC44OTEgNjguODkxdi01MS42NjhoMTAzLjMzN3YtMzQuNDQ2aC0xMDMuMzM3di01MS42Njh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+PC9nPjwvc3ZnPgo=",
      height: 24,
      width: 24
    }, o);
    return _super.call(this, obj);
  }

  _createClass(moveShape, [{
    key: "draw",
    value: function draw(rawCoordinates) {
      this.centerCoordinates = rawCoordinates;
      var c = this.calculationDraw();

      _get(_getPrototypeOf(moveShape.prototype), "draw", this).call(this, c);
    }
  }, {
    key: "calculationDraw",
    value: function calculationDraw() {
      var coordinates = {};
      coordinates.x = this.centerCoordinates.x - this.width / 2;
      coordinates.y = this.centerCoordinates.y - this.height / 2;
      return coordinates;
    }
  }]);

  return moveShape;
}(shape);

var resizeShape = /*#__PURE__*/function (_shape2) {
  _inherits(resizeShape, _shape2);

  var _super2 = _createSuper(resizeShape);

  function resizeShape(o) {
    var _this;

    _classCallCheck(this, resizeShape);

    var obj = Object.assign({
      imgSrc: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIuMDczIDUxMi4wNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM3MS42NiA2NC4xMzRjLTcuNTk3LTQuNTE1LTEwLjA5NC0xNC4zMzMtNS41NzktMjEuOTI5IDQuNTE1LTcuNTk3IDE0LjMzMi0xMC4wOTUgMjEuOTI5LTUuNTc5LjY4MS40MDQgMS4zNTEuODEyIDIuMDIzIDEuMjI5IDE2Ljg1MyAxMC40NzQgMy4xOTIgMzkuMTA4LTE4LjM3MyAyNi4yNzl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTcuMzQ0IDMxNi42NTdjLTE5LjMyNi03OS4yMzMuNDI1LTE1OS42NDggNDguMjgtMjE5LjkzOCA2OS40NzYtODcuNTQ4IDE4My40NTYtMTE2LjI1MSAyODEuMTYxLTgzLjY5NCA4LjM4MyAyLjc5NCAxMi45MTQgMTEuODU0IDEwLjEyMSAyMC4yMzgtMi43OTQgOC4zODMtMTEuODUzIDEyLjkxLTIwLjIzOCAxMC4xMjEtODUuNjQyLTI4LjU0MS0xODUuMzM0LTMuMTkyLTI0NS45NzkgNzMuMjI5LTg0Ljc1IDEwNi43Ny01NS4wOTUgMjYxLjQzNyA1OS4wMTQgMzMwLjc5OCA1MS4yMDQgMzEuMTIzIDExMS4zODggNDAuMzYyIDE2OS40MjggMjYuMjA3IDExOC4xMDItMjguODA2IDE5NC4yNjYtMTQ4LjgyNSAxNjQuNTQyLTI3MC42OTktMTAuMDcyLTQxLjI5Ny0zMS40ODMtNzguNjQ0LTYxLjkxNy0xMDguMDAxLTYuMzU5LTYuMTM1LTYuNTQyLTE2LjI2NS0uNDA3LTIyLjYyNHMxNi4yNjMtNi41NDIgMjIuNjI0LS40MDdjOTkuMTM3IDk1LjYzNCAxMDYuMzMxIDI1Ni42MDEgNy41NzQgMzYwLjU4Ni0xMzkuMDQgMTQ2LjQwMS0zODYuMTk1IDgxLjAyMS00MzQuMjAzLTExNS44MTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyNi42NTcgMzAzLjk0aDYuNjI4YzguODM3IDAgMTYtNy4xNjMgMTYtMTZzLTcuMTYzLTE2LTE2LTE2aC00NS4yNTVjLTQuODAxIDAtOS41OTcgMi4xNjYtMTIuNzc3IDYuMzk4LTQuMzA3IDUuNjk2LTMuMjIzIDYuMTU2LTMuMjIzIDU0Ljg1NiAwIDguODM3IDcuMTYzIDE2IDE2IDE2czE2LTcuMTYzIDE2LTE2di02LjYyOGwyMC42ODcgMjAuNjg3YzMuMTI0IDMuMTI0IDcuMjE5IDQuNjg3IDExLjMxMyA0LjY4NyAxNC4xMjUgMCAyMS40MjQtMTcuMjA1IDExLjMxMy0yNy4zMTN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjcyLjExIDIyNS41MjJjLjQ3NSA0LjgzNSAzLjE3MSA5LjQxNyA3LjcwNCAxMi4xMyA1LjExMSAzLjA1NyA0LjAxNyAyLjI4OSA1My40NzEgMi4yODkgOC44MzcgMCAxNi03LjE2MyAxNi0xNnMtNy4xNjMtMTYtMTYtMTZoLTYuNjI4bDIwLjY4Ny0yMC42ODdjNi4yNDktNi4yNDggNi4yNDktMTYuMzc5IDAtMjIuNjI3LTYuMjQ4LTYuMjQ4LTE2LjM3OS02LjI0OC0yMi42MjcgMGwtMjAuNjg3IDIwLjY4N3YtNi42MjhjMC04LjgzNy03LjE2My0xNi0xNi0xNnMtMTYgNy4xNjMtMTYgMTZjMCA0OS4zMS0uMDM1IDQ1LjY3NS4wOCA0Ni44MzZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjQwLjAzIDE3OC42ODZjMC04LjgzNy03LjE2My0xNi0xNi0xNnMtMTYgNy4xNjMtMTYgMTZ2Ni42MjhsLTIwLjY4Ny0yMC42ODdjLTYuMjQ4LTYuMjQ4LTE2LjM3OS02LjI0OC0yMi42MjcgMC02LjI0OSA2LjI0OC02LjI0OSAxNi4zNzkgMCAyMi42MjdsMjAuNjg3IDIwLjY4N2gtNi42MjhjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZjNDguNTI3IDAgNDcuNDQuNDIxIDUxLjM3NC0xLjIxOCAyLjYyOS0xLjA5MSA0Ljg2Ni0yLjgwNCA2LjY1Ni01LjE3OSA0LjMxMy01Ljc0MSAzLjIyNS02LjA4OCAzLjIyNS01NC44NTh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjM5Ljk1IDI4Ni4zNTljLS40NzItNC44MDItMy4xMzktOS4zOTMtNy42OTgtMTIuMTI2LTUuMDcyLTMuMDY2LTQuMTgtMi4yOTMtNTMuNDc3LTIuMjkzLTguODM3IDAtMTYgNy4xNjMtMTYgMTZzNy4xNjMgMTYgMTYgMTZoNi42MjhsLTIwLjY4NyAyMC42ODdjLTEwLjEwOSAxMC4xMDgtMi44MTIgMjcuMzEzIDExLjMxMyAyNy4zMTMgNC4wOTUgMCA4LjE4OS0xLjU2MyAxMS4zMTMtNC42ODdsMjAuNjg3LTIwLjY4N3Y2LjYyOGMwIDguODM3IDcuMTYzIDE2IDE2IDE2czE2LTcuMTYzIDE2LTE2Yy4wMDEtNDkuMzA5LjAzNi00NS42NzQtLjA3OS00Ni44MzV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIi8+PC9nPjwvc3ZnPgo=",
      height: 24,
      width: 24
    }, o);
    _this = _super2.call(this, obj);
    _this.coordinates = {};
    _this.parentRadius = null;
    _this.rotate = obj.rotate ? obj.rotate : 45;
    return _this;
  }

  _createClass(resizeShape, [{
    key: "setSize",
    value: function setSize(s) {
      this.height = s;
      this.width = s;
    }
  }, {
    key: "draw",
    value: function draw(obj) {
      this.centerCoordinates = obj.coordinates;
      this.radius = obj.parentRadius;
      this.calculationDraw();

      _get(_getPrototypeOf(resizeShape.prototype), "draw", this).call(this, this.coordinates);
    }
  }, {
    key: "calculationDraw",
    value: function calculationDraw() {
      this.coordinates.x = Math.cos(this.rotate * Math.PI / 180) * this.radius + this.centerCoordinates.x;
      this.coordinates.y = this.centerCoordinates.y + Math.sin(this.rotate * Math.PI / 180) * this.radius;
    }
  }, {
    key: "isTouch",
    value: function isTouch(coordinates) {
      return Math.pow(coordinates.x - this.coordinates.x - 12, 2) + Math.pow(coordinates.y - this.coordinates.y - 12, 2) <= Math.pow(12, 2);
    }
  }]);

  return resizeShape;
}(shape);

var cropShape = /*#__PURE__*/function (_shape3) {
  _inherits(cropShape, _shape3);

  var _super3 = _createSuper(cropShape);

  function cropShape(o) {
    var _this2;

    _classCallCheck(this, cropShape);

    _this2 = _super3.call(this, o);
    _this2.crop = o.crop ? o.crop : document.createElement("canvas");
    _this2.targetImg = null;
    _this2.moveIcon = null;
    _this2.resizeIcon = null;
    _this2.background = o.background ? o.background : null;
    _this2.maxRadius = null;
    _this2.mouseDownCoordinates = {};
    _this2.originalCoordinates = {};
    _this2.originalRadius = 0;
    _this2.containerOffset = {};
    _this2.isDrag = false;
    _this2.isResize = false;
    _this2.callback = null;

    _this2.init();

    return _this2;
  }

  _createClass(cropShape, [{
    key: "setRadius",
    value: function setRadius(r) {
      this.radius = r * 2 > this.width || r * 2 > this.height ? this.radius : r;
      var minRadius = this.maxRadius * (20 / 100);
      this.radius = minRadius > this.radius ? minRadius : this.radius;
      this.keepCenterInside();
      var callbackValue = this.getRadius();
      if (this.callback != null) this.callback(callbackValue);
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.radius / this.maxRadius * 100;
    }
  }, {
    key: "setWidth",
    value: function setWidth(w) {
      this.width = w;
      this.height = Math.round(this.img.height / (this.img.width / this.width));
      this.maxRadius = this.width > this.height ? this.height / 2 : this.width / 2;
      this.centerCoordinates.x = this.width / 2;
      this.centerCoordinates.y = this.height / 2;
      this.setRadius(this.maxRadius);
      this.container.height = this.height;
      this.container.width = this.width;
      this.background.height = this.height;
      this.background.width = this.width;
    }
  }, {
    key: "init",
    value: function init() {
      this.isReady = true;
      this.img = document.createElement("canvas");
      this.moveIcon = new moveShape({
        container: this.container
      });
      this.resizeIcon = new resizeShape({
        container: this.container
      });

      this.container.onmousemove = function (event) {
        this.handleMouseMove(event);
      }.bind(this);

      this.container.onmousedown = function (event) {
        this.handleMouseDown(event);
      }.bind(this);

      this.container.onmouseup = function (event) {
        this.handleMouseUp(event);
      }.bind(this);

      this.container.onmouseout = function (event) {
        this.handleMouseOut(event);
      }.bind(this);

      this.container.addEventListener("touchstart", function (event) {
        this.handleMouseDown(event);
      }.bind(this), true);
      this.container.addEventListener("touchmove", function (event) {
        this.handleMouseMove(event);
      }.bind(this), true);
      this.container.addEventListener("touchend", function (event) {
        this.handleMouseUp(event);
      }.bind(this), true);

      window.onresize = function () {
        this.handleResizeWindown();
      }.bind(this);
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.container.getContext("2d");
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = "#fff";
      this.resizeIcon.draw({
        parentRadius: this.radius,
        coordinates: this.centerCoordinates
      });
      ctx.lineWidth = 2;
      ctx.arc(this.centerCoordinates.x, this.centerCoordinates.y, this.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.clip();
      ctx.imageSmoothingQuality = "high";

      _get(_getPrototypeOf(cropShape.prototype), "draw", this).call(this, {
        x: 0,
        y: 0
      });

      this.moveIcon.draw(this.centerCoordinates);
      ctx.restore();
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      var octx = this.img.getContext("2d");
      var steps = this.img.width / this.width >> 1;
      octx.clearRect(0, 0, this.img.width, this.img.height);
      octx.filter = "blur(".concat(steps, "px)");
      octx.drawImage(this.targetImg, 0, 0);
      var ctxImg = this.background.getContext("2d");
      ctxImg.clearRect(0, 0, this.width, this.height);
      ctxImg.imageSmoothingQuality = "high";
      ctxImg.filter = "brightness(60%)";
      ctxImg.drawImage(this.img, 0, 0, this.width, this.height);
    }
  }, {
    key: "getElementOffset",
    value: function getElementOffset(element) {
      var de = document.documentElement;
      var box = element.getBoundingClientRect();
      var top = box.top + window.pageYOffset - de.clientTop;
      var left = box.left + window.pageXOffset - de.clientLeft;
      return {
        top: top,
        left: left
      };
    }
  }, {
    key: "keepCenterInside",
    value: function keepCenterInside() {
      if (this.radius > this.centerCoordinates.x) this.centerCoordinates.x += this.radius - this.centerCoordinates.x;else if (this.radius > this.width - this.centerCoordinates.x) this.centerCoordinates.x -= this.radius - (this.width - this.centerCoordinates.x);
      if (this.radius > this.centerCoordinates.y) this.centerCoordinates.y += this.radius - this.centerCoordinates.y;else if (this.radius > this.height - this.centerCoordinates.y) this.centerCoordinates.y -= this.radius - (this.height - this.centerCoordinates.y);
    }
  }, {
    key: "isTouch",
    value: function isTouch(obj) {
      return Math.pow(obj.x - this.centerCoordinates.x, 2) + Math.pow(obj.y - this.centerCoordinates.y, 2) <= Math.pow(this.radius, 2);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
      this.containerOffset = this.getElementOffset(this.container);

      if (event.type === "touchstart") {
        this.mouseDownCoordinates = {
          x: parseInt(event.touches[0].pageX - this.containerOffset.left),
          y: parseInt(event.touches[0].pageY - this.containerOffset.top)
        };
      } else {
        this.mouseDownCoordinates = {
          x: parseInt(event.pageX - this.containerOffset.left),
          y: parseInt(event.pageY - this.containerOffset.top)
        };
      }

      this.originRadius = this.radius;
      this.originalCoordinates = this.centerCoordinates;
      this.isDrag = this.isTouch(this.mouseDownCoordinates);
      this.isResize = this.resizeIcon.isTouch(this.mouseDownCoordinates);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      event.preventDefault();
      event.stopPropagation();
      var coordinatesMouse = {};
      var offset = {};
      this.containerOffset = this.getElementOffset(this.container);

      if (event.type === "touchmove") {
        coordinatesMouse = {
          x: parseInt(event.touches[0].pageX - this.containerOffset.left),
          y: parseInt(event.touches[0].pageY - this.containerOffset.top)
        };
      } else {
        coordinatesMouse = {
          x: parseInt(event.pageX - this.containerOffset.left),
          y: parseInt(event.pageY - this.containerOffset.top)
        };
      }

      offset = {
        x: coordinatesMouse.x - this.mouseDownCoordinates.x,
        y: coordinatesMouse.y - this.mouseDownCoordinates.y
      };
      var moveOverImage = this.isTouch(coordinatesMouse);
      var resizeImage = this.resizeIcon.isTouch(coordinatesMouse);

      if (resizeImage) {
        this.container.style.cursor = "nw-resize";
      } else if (moveOverImage) {
        this.container.style.cursor = "move";
      } else {
        this.container.style.cursor = "default";
      }

      if (this.isDrag) {
        var dx = 0,
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

        this.centerCoordinates = {
          x: dx,
          y: dy
        };
        this.draw();
      }

      if (this.isResize) {
        var size = offset.x > offset.y ? this.originRadius + offset.y : this.originRadius + offset.x;
        this.setRadius(size);
        this.draw();
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      this.isDrag = false;
      this.isResize = false;
      this.isGetOffset = true;
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(event) {
      this.handleMouseUp(event);
    }
  }, {
    key: "handleResizeWindown",
    value: function handleResizeWindown() {
      var positionInfo = Math.round(document.getElementById("crop-main").getBoundingClientRect().width);
      this.setWidth(Math.round(positionInfo));
      this.drawBackground();
      this.draw();
    }
  }, {
    key: "handleFileChange",
    value: function handleFileChange(event) {
      var _this3 = this;

      return new Promise(function (result, reject) {
        var i = new Image();
        i.src = event;

        i.onload = function () {
          this.targetImg = i;
          this.img.width = i.width;
          this.img.height = i.height;
          result(true);
        }.bind(_this3);

        i.onerror = function (error) {
          reject(error);
        };
      });
    }
  }, {
    key: "handleSliderChange",
    value: function handleSliderChange(event) {
      this.setRadius(this.maxRadius * (parseInt(event.target.value) / 100));
      this.draw();
    }
  }, {
    key: "handleCrop",
    value: function handleCrop(obj) {
      var _this4 = this;

      return new Promise(function (result, reject) {
        if (obj == null || obj == undefined) reject("Please pass output options before crop");

        var crop_ctx = _this4.crop.getContext("2d");

        var x = (_this4.centerCoordinates.x - _this4.radius) * (_this4.img.width / _this4.width);
        var y = (_this4.centerCoordinates.y - _this4.radius) * (_this4.img.height / _this4.height);
        var w = _this4.radius * 2 * (_this4.img.width / _this4.width);
        var h = _this4.radius * 2 * (_this4.img.height / _this4.height);
        _this4.crop.width = _this4.radius * 2;
        _this4.crop.height = _this4.radius * 2;
        crop_ctx.imageSmoothingQuality = "high";
        crop_ctx.drawImage(_this4.img, x, y, w, h, 0, 0, _this4.radius * 2, _this4.radius * 2);

        if (obj.type == "Base64") {
          var res = _this4.crop.toDataURL(obj.file ? obj.file : "image/jpeg", obj.quality ? obj.quality : 0.95);

          result(res);
        } else if (obj.type == "Blob") {
          _this4.crop.toBlob(function (blob) {
            result(blob);
          }, obj.file ? obj.file : "image/jpeg", obj.quality ? obj.quality : 0.95);
        } else reject("Export type is illegal");
      });
    }
  }, {
    key: "handleRadiusChange",
    value: function handleRadiusChange(cb) {
      if (cb) {
        this.callback = cb;
      }
    }
  }]);

  return cropShape;
}(shape);var script = {
  name: "v-img-cropper",
  props: {
    title: {
      type: String,
      default: "Crop your new profile picture"
    },
    label: {
      type: String,
      default: "Choose you picture"
    },
    type: {
      type: String,
      default: "primary",
      validator: function validator(x) {
        return ["primary", "success", "secondary", "danger", "warning", "info", "light", "dark", "default"].indexOf(x) !== -1;
      }
    },
    accept: {
      type: String,
      default: "image/png, image/jpeg, image/jpg"
    },
    size: {
      type: Number,
      default: 1
    },
    exportType: {
      type: String,
      default: "Base64",
      validator: function validator(x) {
        return ["Base64", "Blob"].indexOf(x) !== -1;
      }
    },
    outputQuality: {
      type: Number,
      default: 0.92
    },
    outputType: {
      type: String,
      default: "image/jpeg"
    },
    btnsize: {
      type: String,
      validator: function validator(x) {
        return ["lg", "sm"].indexOf(x) !== -1;
      }
    },
    outline: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: String,
      default: "Close"
    },
    submit: {
      type: String,
      default: "Crop"
    }
  },
  model: {
    event: "change"
  },
  data: function data() {
    return {
      show: false,
      cropShape: null,
      radius: 100
    };
  },
  mounted: function mounted() {
    var container = document.getElementById("canvas");
    var background = document.getElementById("background-canvas");
    var cropArea = document.getElementById("crop-canvas");
    var slider = document.getElementById("resize-slider");
    this.cropShape = new cropShape({
      container: container,
      crop: cropArea,
      background: background
    });
    this.cropShape.handleRadiusChange(function (e) {
      this.radius = Math.round(e);
      slider.value = this.radius;
    }.bind(this));
  },
  methods: {
    openModal: function openModal() {
      var _this = this;

      document.getElementsByTagName("body")[0].classList.add("modal-open");
      document.getElementById("backdrop").style.display = "block";
      document.getElementById("crop-modal").style.display = "block";
      setTimeout(function () {
        _this.show = true;

        _this.cropShape.handleResizeWindown();
      }, 10);
      setTimeout(function () {
        _this.cropShape.handleResizeWindown();
      }, 20);
    },
    closeModal: function closeModal() {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
      document.getElementById("backdrop").style.display = "none";
      document.getElementById("crop-modal").style.display = "none";
      this.show = true;
      this.clearFile();
    },
    onFileChange: function onFileChange(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var file, result, isOpenModal;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = event.target.files[0];

                if (file) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;

                if (!(file.size > _this2.size * 1024 * 1024)) {
                  _context.next = 8;
                  break;
                }

                throw "File should be smaller than ".concat(_this2.size, "mb");

              case 8:
                if (!(file.name.indexOf(".jpg") <= 0 && file.name.indexOf(".jpeg") <= 0 && file.name.indexOf(".png") <= 0)) {
                  _context.next = 10;
                  break;
                }

                throw "We only support PNG, or JPG pictures.";

              case 10:
                _context.next = 12;
                return _this2.toBase64(file);

              case 12:
                result = _context.sent;
                _context.next = 15;
                return _this2.cropShape.handleFileChange(result);

              case 15:
                isOpenModal = _context.sent;
                if (isOpenModal) _this2.openModal();
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](3);

                _this2.$emit("message", {
                  Status: "False",
                  Message: _context.t0,
                  Data: {}
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 19]]);
      }))();
    },
    onSliderInput: function onSliderInput(event) {
      this.cropShape.handleSliderChange(event);
    },
    onCrop: function onCrop() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var msg, outputOption, base64;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                msg = {};
                _context2.prev = 1;
                outputOption = {
                  quality: _this3.outputQuality,
                  type: _this3.exportType,
                  file: _this3.outputType
                };
                _context2.next = 5;
                return _this3.cropShape.handleCrop(outputOption);

              case 5:
                base64 = _context2.sent;

                if (base64) {
                  msg = {
                    Status: "Pass",
                    Message: "Crop Success",
                    Data: base64
                  };
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                msg = {
                  Status: "False",
                  Message: _context2.t0,
                  Data: {}
                };

              case 12:
                _context2.prev = 12;

                _this3.$emit("message", msg);

                _this3.closeModal();

                return _context2.finish(12);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9, 12, 16]]);
      }))();
    },
    clearFile: function clearFile() {
      var inputs = document.getElementById("choose-file");

      try {
        inputs.value = "";

        if (inputs.value) {
          inputs.type = "text";
          inputs.type = "file";
        }
      } catch (e) {}
    },
    toBase64: function toBase64(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          return resolve(reader.result);
        };

        reader.onerror = function (error) {
          return reject(error);
        };
      });
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _obj, _obj$1, _obj$2;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div id=\"crop-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"crop-modal\" aria-hidden=\"true\"" + _vm._ssrClass("modal fade", [{
    show: _vm.show
  }]) + " data-v-09b7ab22><div role=\"document\" class=\"modal-dialog\" data-v-09b7ab22><div class=\"modal-content\" data-v-09b7ab22><div class=\"modal-header\" data-v-09b7ab22><h6 id=\"modal-label\" class=\"modal-title\" data-v-09b7ab22>" + _vm._ssrEscape("\n            " + _vm._s(_vm.title) + "\n          ") + "</h6> <button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\" data-v-09b7ab22></button></div> <div class=\"modal-body\" data-v-09b7ab22><div id=\"crop-main\" class=\"crop-main\" data-v-09b7ab22><canvas id=\"crop-canvas\" class=\"d-none\" data-v-09b7ab22></canvas> <div class=\"position-absolute\" data-v-09b7ab22><canvas id=\"canvas\" style=\"z-index: 1998 \" data-v-09b7ab22></canvas></div> <canvas id=\"background-canvas\" style=\"z-index: 1997; \" data-v-09b7ab22></canvas></div></div> <div class=\"modal-footer\" data-v-09b7ab22><div class=\"row\" data-v-09b7ab22><form class=\"col-12\" data-v-09b7ab22><label for=\"resize-slider\" class=\"form-label\" data-v-09b7ab22>Size Crop\n                <span" + _vm._ssrClass("badge rounded-pill bg-primary", ["bg-" + _vm.type]) + " data-v-09b7ab22>" + _vm._ssrEscape(_vm._s(_vm.radius) + " %") + "</span></label> <input type=\"range\" min=\"20\" max=\"100\" step=\"1\" value=\"100\" id=\"resize-slider\"" + _vm._ssrClass("form-range ", ["range-" + _vm.type]) + " data-v-09b7ab22></form> <form class=\"col-12  d-flex justify-content-end\" data-v-09b7ab22><button type=\"button\" data-dismiss=\"modal\"" + _vm._ssrClass("btn ", ["btn" + (_vm.outline ? "-outline" : "") + "-secondary", (_obj = {}, _obj["btn-" + _vm.btnsize] = _vm.btnsize, _obj)]) + " data-v-09b7ab22>" + _vm._ssrEscape("\n                " + _vm._s(_vm.cancel) + "\n              ") + "</button> <button type=\"button\" id=\"crop\"" + _vm._ssrClass("btn", [(_obj$1 = {}, _obj$1["btn" + (_vm.outline ? "-outline" : "") + "-" + _vm.type] = _vm.type, _obj$1), (_obj$2 = {}, _obj$2["btn-" + _vm.btnsize] = _vm.btnsize, _obj$2)]) + " data-v-09b7ab22>" + _vm._ssrEscape("\n                " + _vm._s(_vm.submit) + "\n              ") + "</button></form></div></div></div></div></div> <div id=\"backdrop\" class=\"modal-backdrop fade show\" style=\"display: none;\" data-v-09b7ab22></div> <div class=\"mb-3\" data-v-09b7ab22><label for=\"choose-file\" class=\"form-label\" data-v-09b7ab22>" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label> <input type=\"file\" id=\"choose-file\"" + _vm._ssrAttr("accept", _vm.accept) + " class=\"form-control\" data-v-09b7ab22></div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-09b7ab22_0", {
    source: ".wrapper[data-v-09b7ab22]{display:block;margin:0 auto;overflow-x:hidden}.modal-body[data-v-09b7ab22]{overflow-y:auto!important;padding:16px!important}.modal-footer[data-v-09b7ab22]{display:grid;justify-content:normal}.modal-footer button[data-v-09b7ab22]{margin-left:.5rem}.crop-main[data-v-09b7ab22]{width:100%;max-width:auto;height:auto;max-height:350px}input[type=range].range-primary[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#0b5ed7;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-primary[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-primary[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-primary[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(49 132 253 / 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-success[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#157347;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-success[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-success[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-success[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(60 153 110 / 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-danger[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#bb2d3b;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-danger[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-danger[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-danger[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(225 83 97 / 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-warning[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#ffc720;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-warning[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-warning[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-warning[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(217 164 6 / 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-info[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#25cff2;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-info[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-info[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-info[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(11 172 204/ 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#565e64;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-secondary[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(130 138 145/ 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-dark[data-v-09b7ab22]::-webkit-slider-thumb{-webkit-appearance:none;background:#1a1e21;box-shadow:none;transition:box-shadow .3s ease-in-out}input[type=range].range-dark[data-v-09b7ab22]::-webkit-slider-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(66 70 73 / 50%)}input[type=range].range-dark[data-v-09b7ab22]::-webkit-slider-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(66 70 73 / 50%)}input[type=range].range-dark[data-v-09b7ab22]:active::-webkit-slider-thumb{-webkit-appearance:none;background:rgb(66 70 73 / 50%);box-shadow:0 0 0 1px #fff,0 0 0 4px rgb(66 70 73 / 50%)}input[type=range].range-primary[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#0b5ed7;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-primary[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-primary[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-primary[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(49 132 253 / 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(49 132 253 / 50%)}input[type=range].range-success[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#157347;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-success[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-success[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-success[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(60 153 110 / 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(60 153 110 / 50%)}input[type=range].range-danger[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#bb2d3b;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-danger[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-danger[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-danger[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(225 83 97 / 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(225 83 97 / 50%)}input[type=range].range-warning[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#ffc720;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-warning[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-warning[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-warning[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(217 164 6 / 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(217 164 6 / 50%)}input[type=range].range-info[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#25cff2;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-info[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-info[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-info[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(11 172 204/ 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(11 172 204 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#565e64;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-secondary[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-secondary[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(130 138 145/ 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(130 138 145 / 50%)}input[type=range].range-dark[data-v-09b7ab22]::-moz-range-thumb{-webkit-appearance:none;background:#1a1e21;box-shadow:none;transition:box-shadow .3s ease-in-out;cursor:pointer}input[type=range].range-dark[data-v-09b7ab22]::-moz-range-thumb:hover{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(66 70 73 / 50%)}input[type=range].range-dark[data-v-09b7ab22]::-moz-range-thumb:focus{-webkit-appearance:none;box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(66 70 73 / 50%)}input[type=range].range-dark[data-v-09b7ab22]:active::-moz-range-thumb{-webkit-appearance:none;background:rgb(66 70 73 / 50%);box-shadow:0 0 0 1.5px #fff,0 0 0 4px rgb(66 70 73 / 50%)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-09b7ab22";
/* module identifier */

var __vue_module_identifier__ = "data-v-09b7ab22";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VImgCropper: __vue_component__});var install = function installVImgCropper(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VImgCropper: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;
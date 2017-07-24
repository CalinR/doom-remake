/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _degreeConversion = __webpack_require__(4);

Object.defineProperty(exports, 'toRadians', {
  enumerable: true,
  get: function get() {
    return _degreeConversion.toRadians;
  }
});
Object.defineProperty(exports, 'toDegrees', {
  enumerable: true,
  get: function get() {
    return _degreeConversion.toDegrees;
  }
});

var _time = __webpack_require__(5);

Object.defineProperty(exports, 'deltaTime', {
  enumerable: true,
  get: function get() {
    return _time.deltaTime;
  }
});
Object.defineProperty(exports, 'lastUpdate', {
  enumerable: true,
  get: function get() {
    return _time.lastUpdate;
  }
});
Object.defineProperty(exports, 'updateTime', {
  enumerable: true,
  get: function get() {
    return _time.updateTime;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Game2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player = __webpack_require__(3);

var _Player2 = _interopRequireDefault(_Player);

var _utils = __webpack_require__(0);

var _loadLevel = __webpack_require__(6);

var _loadLevel2 = _interopRequireDefault(_loadLevel);

var _softwareRenderer = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.player = new _Player2.default({ x: 100, y: 100, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' } });
        this.mapCanvas = document.getElementById('map');
        this.mapContext = this.mapCanvas.getContext('2d');
        this.level = (0, _loadLevel2.default)('demo');
        this.camera = new _softwareRenderer.Camera({ x: this.player.x, y: this.player.y, world: this.level, element: document.getElementById('camera') });
        this.camera.render();
        this.loop();
    }

    _createClass(Game, [{
        key: 'loop',
        value: function loop() {
            var _this = this;

            (0, _utils.updateTime)();
            this.player.update();
            this.drawMap();
            this.drawPlayer();
            window.requestAnimationFrame(function () {
                return _this.loop();
            });
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            this.mapContext.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
            this.mapContext.save();
            this.mapContext.beginPath();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.level[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector = _step.value;
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = sector.walls.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _step2$value = _slicedToArray(_step2.value, 2),
                                index = _step2$value[0],
                                wall = _step2$value[1];

                            if (index === 0) {
                                this.mapContext.moveTo(wall.x, wall.y);
                            } else {
                                this.mapContext.strokeStyle = 'black';
                                this.mapContext.lineTo(wall.x, wall.y);
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    this.mapContext.lineTo(sector.walls[0].x, sector.walls[0].y);
                    this.mapContext.stroke();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.mapContext.closePath();
            this.mapContext.restore();
        }
    }, {
        key: 'drawPlayer',
        value: function drawPlayer() {
            var playerSize = 6;
            this.mapContext.save();
            this.mapContext.beginPath();
            this.mapContext.translate(this.player.x, this.player.y);
            this.mapContext.rotate((0, _utils.toRadians)(this.player.rotation));
            this.mapContext.fillStyle = 'red';
            this.mapContext.fillRect(-playerSize / 2, -playerSize / 2, playerSize, playerSize);
            this.mapContext.fillRect(0, -1, 10, 2);
            this.mapContext.closePath();
            this.mapContext.restore();
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            _ref$height = _ref.height,
            height = _ref$height === undefined ? 1 : _ref$height,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
            _ref$controls = _ref.controls,
            controls = _ref$controls === undefined ? { forward: 'w', backward: 's', left: 'a', right: 'd' } : _ref$controls;

        _classCallCheck(this, Player);

        this.x = x;
        this.y = y;
        this.height = height;
        this.rotation = rotation;
        this.speed = 0;
        this.moveSpeed = 50;
        this.rotationSpeed = 90;
        this.direction = 0;
        this.controls = controls;

        this.bindControls();
    }

    _createClass(Player, [{
        key: 'bindControls',
        value: function bindControls() {
            var _this = this;

            document.onkeydown = function (event) {
                switch (event.key) {
                    case _this.controls.forward:
                        _this.speed = 1;
                        break;
                    case _this.controls.backward:
                        _this.speed = -1;
                        break;
                    case _this.controls.left:
                        _this.direction = -1;
                        break;
                    case _this.controls.right:
                        _this.direction = 1;
                        break;
                }
            };

            document.onkeyup = function (event) {
                switch (event.key) {
                    case _this.controls.forward:
                        _this.speed = 0;
                        break;
                    case _this.controls.backward:
                        _this.speed = 0;
                        break;
                    case _this.controls.left:
                        _this.direction = 0;
                        break;
                    case _this.controls.right:
                        _this.direction = 0;
                        break;
                }
            };
        }
    }, {
        key: 'update',
        value: function update() {
            var rotation = this.rotation + this.direction * this.rotationSpeed * _utils.deltaTime;

            if (rotation > 360) {
                rotation = 0;
            } else if (rotation < 0) {
                rotation = rotation + 360;
            }

            var moveStep = this.speed * this.moveSpeed;
            var radians = (0, _utils.toRadians)(rotation);
            var moveX = Math.cos(radians) * moveStep;
            var moveY = Math.sin(radians) * moveStep;
            var x = this.x + moveX * _utils.deltaTime;
            var y = this.y + moveY * _utils.deltaTime;

            this.x = x;
            this.y = y;
            this.rotation = rotation;
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toRadians = exports.toRadians = function toRadians(degrees) {
    return degrees * Math.PI / 180;
};

var toDegrees = exports.toDegrees = function toDegrees(radians) {
    return radians * 180 / Math.PI;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var deltaTime = exports.deltaTime = 0;
var lastUpdate = exports.lastUpdate = Date.now();
var updateTime = exports.updateTime = function updateTime() {
    var currentTime = Date.now();
    exports.deltaTime = deltaTime = (currentTime - lastUpdate) / 1000.0; // Convert delta time from milliseconds to seconds
    exports.lastUpdate = lastUpdate = currentTime;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var levels = {
    demo: __webpack_require__(7)
};

function LevelException(message) {
    this.message = message;
    this.name = 'LevelException';
}

var loadLevel = function loadLevel(name) {
    if (levels[name]) {
        return levels[name];
    } else {
        throw new LevelException('Invalid Level Name');
    }
};

exports.default = loadLevel;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"sector_id":0,"walls":[{"x":20,"y":50},{"x":50,"y":20},{"x":150,"y":20},{"x":180,"y":50},{"x":180,"y":150},{"x":150,"y":180},{"x":50,"y":180},{"x":20,"y":150}]},{"sector_id":1,"walls":[{"x":180,"y":50},{"x":300,"y":50},{"x":300,"y":150},{"x":180,"y":150}]},{"sector_id":2,"walls":[{"x":300,"y":50},{"x":330,"y":20},{"x":430,"y":20},{"x":460,"y":50},{"x":460,"y":150},{"x":430,"y":180},{"x":330,"y":180},{"x":300,"y":150}]}]

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Camera: __webpack_require__(9).default

    // import Camera from './Camera'

    // export Camera;

};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CameraException(message) {
    this.message = message;
    this.name = 'CameraException';
}

var Camera = function () {
    function Camera() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            _ref$z = _ref.z,
            z = _ref$z === undefined ? 0 : _ref$z,
            _ref$world = _ref.world,
            world = _ref$world === undefined ? null : _ref$world,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
            _ref$element = _ref.element,
            element = _ref$element === undefined ? null : _ref$element;

        _classCallCheck(this, Camera);

        if (!element) {
            throw new CameraException('DOM element needs to be defined');
        }

        this.width = element.width;
        this.height = element.height;
        this.x = x;
        this.y = y;
        this.z = z;
        this.sector = null;
        this.world = world;
        this.rotation = rotation;
        this.hfov = 1.0 * 0.73 * this.height / this.width;
        this.vfov = 1.0 * .2;

        console.log(this);
    }

    _createClass(Camera, [{
        key: 'findActiveSector',
        value: function findActiveSector() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.world[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector = _step.value;

                    console.log(sector);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.world) {
                throw new CameraException('No world to render');
            }

            this.findActiveSector();

            // for(const sector of this.world){
            //     console.log(sector);
            // }
        }
    }]);

    return Camera;
}();

exports.default = Camera;

/***/ })
/******/ ]);
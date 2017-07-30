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
/* 0 */,
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

var _loadLevel = __webpack_require__(6);

var _loadLevel2 = _interopRequireDefault(_loadLevel);

var _softwareRenderer = __webpack_require__(8);

var _Player = __webpack_require__(3);

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.mapCanvas = document.getElementById('map');
        this.mapContext = this.mapCanvas.getContext('2d');
        this.level = (0, _loadLevel2.default)('demo');
        this.player = new _Player2.default({ x: 100, y: 100, z: 0, rotation: 0, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }, world: this.level });
        this.camera = new _softwareRenderer.Camera({ z: 25, parent: this.player, world: this.level, element: document.getElementById('camera') });
        this.loop();
    }

    _createClass(Game, [{
        key: 'loop',
        value: function loop() {
            var _this = this;

            (0, _softwareRenderer.updateTime)();
            this.player.update();
            this.drawMap();
            this.drawPlayer();
            this.camera.render();
            window.requestAnimationFrame(function () {
                return _this.loop();
            });
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            this.mapContext.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
            this.mapContext.save();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.level[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector = _step.value;

                    this.mapContext.beginPath();
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = sector.vertices.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _step2$value = _slicedToArray(_step2.value, 2),
                                index = _step2$value[0],
                                vertex = _step2$value[1];

                            if (index === 0) {
                                this.mapContext.moveTo(vertex.x, vertex.y);
                            } else {
                                this.mapContext.strokeStyle = 'black';
                                this.mapContext.lineTo(vertex.x, vertex.y);
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

                    this.mapContext.lineTo(sector.vertices[0].x, sector.vertices[0].y);
                    if (this.camera.sector == sector.id) {
                        this.mapContext.fillStyle = '#bdc3c7';
                        this.mapContext.fill();
                    }
                    this.mapContext.stroke();
                    this.mapContext.closePath();
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

            this.mapContext.restore();
        }
    }, {
        key: 'drawPlayer',
        value: function drawPlayer() {
            var playerSize = 6;
            this.mapContext.save();
            this.mapContext.beginPath();
            this.mapContext.translate(this.player.x, this.player.y);
            this.mapContext.rotate((0, _softwareRenderer.toRadians)(this.player.rotation));
            this.mapContext.fillStyle = 'red';
            this.mapContext.fillRect(0, -1, 10, 2);
            this.mapContext.fillRect(-playerSize / 2, -playerSize / 2, playerSize, playerSize);
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

var _softwareRenderer = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_GameObject) {
    _inherits(Player, _GameObject);

    function Player() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            _ref$z = _ref.z,
            z = _ref$z === undefined ? 0 : _ref$z,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
            _ref$controls = _ref.controls,
            controls = _ref$controls === undefined ? { forward: 'w', backward: 's', left: 'a', right: 'd' } : _ref$controls,
            _ref$world = _ref.world,
            world = _ref$world === undefined ? null : _ref$world;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, { x: x, y: y, z: z, rotation: rotation }));

        _this.world = world;
        _this.speed = 0;
        _this.moveSpeed = 50;
        _this.rotationSpeed = 90;
        _this.direction = 0;
        _this.controls = controls;
        _this.bindControls();
        return _this;
    }

    _createClass(Player, [{
        key: 'bindControls',
        value: function bindControls() {
            var _this2 = this;

            document.onkeydown = function (event) {
                event.preventDefault();
                switch (event.key) {
                    case _this2.controls.forward:
                        _this2.speed = 1;
                        break;
                    case _this2.controls.backward:
                        _this2.speed = -1;
                        break;
                    case _this2.controls.left:
                        _this2.direction = -1;
                        break;
                    case _this2.controls.right:
                        _this2.direction = 1;
                        break;
                }
            };

            document.onkeyup = function (event) {
                switch (event.key) {
                    case _this2.controls.forward:
                        _this2.speed = 0;
                        break;
                    case _this2.controls.backward:
                        _this2.speed = 0;
                        break;
                    case _this2.controls.left:
                        _this2.direction = 0;
                        break;
                    case _this2.controls.right:
                        _this2.direction = 0;
                        break;
                }
            };
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.sector) {
                this.z = this.sector.floor;
            }
            var rotation = this.rotation + this.direction * this.rotationSpeed * _softwareRenderer.deltaTime;

            if (rotation > 360) {
                rotation = 0;
            } else if (rotation < 0) {
                rotation = rotation + 360;
            }

            var moveStep = this.speed * this.moveSpeed;
            var radians = (0, _softwareRenderer.toRadians)(rotation);
            var moveX = Math.cos(radians) * moveStep;
            var moveY = Math.sin(radians) * moveStep;
            var x = this.x + moveX * _softwareRenderer.deltaTime;
            var y = this.y + moveY * _softwareRenderer.deltaTime;

            this.x = x;
            this.y = y;
            this.rotation = rotation;
        }
    }]);

    return Player;
}(_softwareRenderer.GameObject);

exports.default = Player;

/***/ }),
/* 4 */,
/* 5 */,
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

module.exports = [{"id":0,"floor":0,"ceiling":60,"vertices":[{"x":20,"y":50,"neighbour":-1},{"x":50,"y":20,"neighbour":-1},{"x":150,"y":20,"neighbour":-1},{"x":180,"y":50,"neighbour":1},{"x":180,"y":150,"neighbour":-1},{"x":150,"y":180,"neighbour":-1},{"x":50,"y":180,"neighbour":-1},{"x":20,"y":150,"neighbour":-1}]},{"id":1,"floor":10,"ceiling":50,"vertices":[{"x":180,"y":50,"neighbour":-1},{"x":300,"y":50,"neighbour":2},{"x":300,"y":150,"neighbour":-1},{"x":180,"y":150,"neighbour":0}]},{"id":2,"floor":0,"ceiling":60,"vertices":[{"x":300,"y":50,"neighbour":-1},{"x":330,"y":20,"neighbour":-1},{"x":430,"y":20,"neighbour":-1},{"x":460,"y":50,"neighbour":-1},{"x":460,"y":150,"neighbour":-1},{"x":430,"y":180,"neighbour":-1},{"x":330,"y":180,"neighbour":3},{"x":300,"y":150,"neighbour":1}]},{"id":3,"floor":0,"ceiling":60,"vertices":[{"x":300,"y":150,"neighbour":2},{"x":330,"y":180,"neighbour":-1},{"x":260,"y":240,"neighbour":-1},{"x":230,"y":210,"neighbour":-1}]}]

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameObject = exports.Camera = undefined;

var _utils = __webpack_require__(10);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _Camera = __webpack_require__(9);

var _Camera2 = _interopRequireDefault(_Camera);

var _GameObject = __webpack_require__(15);

var _GameObject2 = _interopRequireDefault(_GameObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Camera = _Camera2.default;
exports.GameObject = _GameObject2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(10);

var _GameObject = __webpack_require__(15);

var _GameObject2 = _interopRequireDefault(_GameObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            _ref$parent = _ref.parent,
            parent = _ref$parent === undefined ? null : _ref$parent,
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
        if (!parent) {
            throw new CameraException('No parent assigned');
        }
        if (parent instanceof _GameObject2.default == false) {
            throw new CameraException('Parent must be an instance of GameObject');
        }

        this.width = element.width;
        this.height = element.height;
        this.x = x;
        this.y = y;
        this.z = z;
        this.parent = parent;
        this.world = world;
        this.rotation = rotation;
        this.hfov = 1.0 * 0.73 * this.height / this.width;
        this.vfov = 1.0 * .2;
        this.context = element.getContext('2d');
        this.lastPosition = {
            x: parent.x,
            y: parent.y
        };
        this.sector = this.getActiveSector();
    }

    _createClass(Camera, [{
        key: 'getActiveSector',
        value: function getActiveSector() {
            if (!this.world) {
                throw new CameraException('No world to assigned to camera');
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.world[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector = _step.value;

                    var wallMatches = 0;
                    for (var i = 0; i < sector.vertices.length; i++) {
                        var vx1 = sector.vertices[i].x;
                        var vy1 = sector.vertices[i].y;
                        var vx2 = i >= sector.vertices.length - 1 ? sector.vertices[0].x : sector.vertices[i + 1].x;
                        var vy2 = i >= sector.vertices.length - 1 ? sector.vertices[0].y : sector.vertices[i + 1].y;
                        if ((0, _utils.pointSide)(this.currentPosition.x, this.currentPosition.y, vx1, vy1, vx2, vy2) > 0) {
                            wallMatches++;
                        }
                    }

                    if (wallMatches == sector.vertices.length) {
                        this.parent.sector = sector;
                        return sector.id;
                        break;
                    }
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
        key: 'isMoving',
        value: function isMoving() {
            return JSON.stringify(this.currentPosition) !== JSON.stringify(this.lastPosition);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.context.clearRect(0, 0, this.width, this.height);
        }
    }, {
        key: 'yaw',
        value: function yaw(y, z) {
            return y + z * 0; // 0 is placeholder. Should be player yaw, based on if the player is looking up or down.
        }
    }, {
        key: 'changeSector',
        value: function changeSector() {
            // console.log('moved', this.lastPosition, this.currentPosition);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.world[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var sector = _step2.value;

                    for (var i = 0; i < sector.vertices.length; i++) {
                        var vx1 = sector.vertices[i].x;
                        var vy1 = sector.vertices[i].y;
                        var vx2 = i >= sector.vertices.length - 1 ? sector.vertices[0].x : sector.vertices[i + 1].x;
                        var vy2 = i >= sector.vertices.length - 1 ? sector.vertices[0].y : sector.vertices[i + 1].y;

                        if ((0, _utils.intersectBox)(this.currentPosition.x, this.currentPosition.y, this.lastPosition.x, this.lastPosition.y, vx1, vy1, vx2, vy2)) {
                            if ((0, _utils.pointSide)(this.currentPosition.x, this.currentPosition.y, vx1, vy1, vx2, vy2) > 0) {
                                this.sector = sector.id;
                                this.parent.sector = sector;
                                console.log('you are now in sector ', sector.id);
                            }
                            break;
                        }
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
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.world) {
                throw new CameraException('No world to render');
            }

            if (this.isMoving()) {
                this.changeSector();
            }

            this.clear();

            var sector = this.world[this.sector];

            if (!sector) {
                return false;
            }

            for (var i = 0; i < sector.vertices.length; i++) {
                /* Acquire the x,y coordinates of the two vertexes forming the edge of the sector */
                /* Transform the vertices into the player's view */
                var vx1 = sector.vertices[i].x - this.parent.x;
                var vy1 = sector.vertices[i].y - this.parent.y;
                var vx2 = (i >= sector.vertices.length - 1 ? sector.vertices[0].x : sector.vertices[i + 1].x) - this.parent.x;
                var vy2 = (i >= sector.vertices.length - 1 ? sector.vertices[0].y : sector.vertices[i + 1].y) - this.parent.y;

                /* Rotate them around the player's view */
                var angle = (0, _utils.toRadians)(this.parent.rotation);
                var pcos = Math.cos(angle);
                var psin = Math.sin(angle);
                var tx1 = vx1 * psin - vy1 * pcos;
                var tz1 = vx1 * pcos + vy1 * psin;
                var tx2 = vx2 * psin - vy2 * pcos;
                var tz2 = vx2 * pcos + vy2 * psin;

                /* Is the wall at least partially in front of the player? */
                if (tz1 <= 0 && tz2 <= 0) continue;

                /* Is any part of the wall behind the player */
                if (tz1 <= 0 || tz2 <= 0) {
                    var nearz = 5; // Not sure why this needs to be this
                    var farz = 5; // Not sure why this needs to be this
                    var nearside = 0.00001; // Not sure why this needs to be this
                    var farside = 20; // Not sure why this needs to be this

                    // Find an intersection between the wall and the approximate edges of player's view
                    var i1 = (0, _utils.intersect)(tx1, tz1, tx2, tz2, -nearside, nearz, -farside, farz);
                    var i2 = (0, _utils.intersect)(tx1, tz1, tx2, tz2, nearside, nearz, farside, farz);

                    if (tz1 < nearz) {
                        if (i1.y > 0) {
                            tx1 = i1.x;tz1 = i1.y;
                        } else {
                            tx1 = i2.x;tz1 = i2.y;
                        }
                    }
                    if (tz2 < nearz) {
                        if (i1.y > 0) {
                            tx2 = i1.x;tz2 = i1.y;
                        } else {
                            tx2 = i2.x;tz2 = i2.y;
                        }
                    }
                }

                /* Do perspective transformation */
                var xscale1 = this.width * this.hfov / tz1;
                var yscale1 = this.height * this.vfov / tz1;
                var xscale2 = this.width * this.hfov / tz2;
                var yscale2 = this.height * this.vfov / tz2;
                var x1 = this.width / 2 + -tx1 * xscale1;
                var x2 = this.width / 2 + -tx2 * xscale2;

                if (x1 >= x2) continue;

                var yceil = sector.ceiling - (this.parent.z + this.z);
                var yfloor = sector.floor - (this.parent.z + this.z);

                var y1a = this.height / 2 + -this.yaw(yceil, tz1) * yscale1;
                var y1b = this.height / 2 + -this.yaw(yfloor, tz1) * yscale1;
                var y2a = this.height / 2 + -this.yaw(yceil, tz2) * yscale2;
                var y2b = this.height / 2 + -this.yaw(yfloor, tz2) * yscale2;

                var nyceil = 0;
                var nyfloor = 0;
                var neighbour = sector.vertices[i].neighbour;

                if (neighbour > -1) {
                    nyceil = this.world[neighbour].ceiling - (this.parent.z + this.z);
                    nyfloor = this.world[neighbour].floor - (this.parent.z + this.z);
                }

                var ny1a = this.height / 2 + -this.yaw(nyceil, tz1) * yscale1;
                var ny1b = this.height / 2 + -this.yaw(nyfloor, tz1) * yscale1;
                var ny2a = this.height / 2 + -this.yaw(nyceil, tz2) * yscale2;
                var ny2b = this.height / 2 + -this.yaw(nyfloor, tz2) * yscale2;

                var beginX = Math.max(x1, 0);
                var endX = Math.min(x1, this.width - 1);

                var ya_int = (0, _utils.scalerInit)(x1, beginX, x2, y1a, y2a);
                var yb_int = (0, _utils.scalerInit)(x1, beginX, x2, y1b, y2b);
                var nya_int = (0, _utils.scalerInit)(x1, beginX, x2, ny1a, ny2a);
                var nyb_int = (0, _utils.scalerInit)(x1, beginX, x2, ny1b, ny2b);

                // for(var x = beginX; x <= endX; x++){
                //     const ya = scalerNext(ya_int);
                //     const yb = scalerNext(yb_int);

                //     const cya = clamp(ya, );

                //     // int ya = Scaler_Next(&ya_int);
                //     // int yb = Scaler_Next(&yb_int);
                //     // /* Clamp the ya & yb */
                //     // int cya = clamp(ya, ytop[x],ybottom[x]);
                //     // int cyb = clamp(yb, ytop[x],ybottom[x]);
                // }


                // int beginx = max(x1, now.sx1), endx = min(x2, now.sx2);

                /* Disable by default */
                /* Use the following to draw out rotated vectors */
                // this.context.save();
                // this.context.beginPath();
                // this.context.strokeStyle = 'black';
                // this.context.moveTo(tx1 + (this.width / 2), tz1 + (this.height / 2));
                // this.context.lineTo(tx2 + (this.width / 2), tz2 + (this.height / 2));
                // this.context.stroke();
                // this.context.closePath();
                // this.context.restore();  

                /* Use the following to draw perspective transformed vertices */
                this.context.save();
                // Draws lines between vertices

                this.context.strokeStyle = 'black';

                if (neighbour > -1) {
                    this.context.fillStyle = '#7000c2';

                    // If neighbour ceiling is lower than current sector ceiling, render it
                    if (this.world[neighbour].ceiling < sector.ceiling) {
                        // Draw ceiling of neighbour
                        this.context.beginPath();
                        this.context.moveTo(x1, y1a);
                        this.context.lineTo(x2, y2a);
                        this.context.lineTo(x2, ny2a);
                        this.context.lineTo(x1, ny1a);
                        this.context.lineTo(x1, y1a);
                        this.context.stroke();
                        this.context.fill();
                        this.context.closePath();
                    } else {
                        ny1a = y1a;
                        ny2a = y2a;
                    }

                    // If neighbour floor is higher than current sector floor, render it
                    if (this.world[neighbour].floor > sector.floor) {
                        // Draw floor of neighbour
                        this.context.beginPath();
                        this.context.moveTo(x1, y1b);
                        this.context.lineTo(x2, y2b);
                        this.context.lineTo(x2, ny2b);
                        this.context.lineTo(x1, ny1b);
                        this.context.lineTo(x1, y1b);
                        this.context.stroke();
                        this.context.fill();
                        this.context.closePath();
                    } else {
                        ny1b = y1b;
                        ny2b = y2b;
                    }

                    // Render portal
                    this.context.beginPath();
                    this.context.fillStyle = '#ac0002';
                    this.context.moveTo(x1, ny1a);
                    this.context.lineTo(x2, ny2a);
                    this.context.lineTo(x2, ny2b);
                    this.context.lineTo(x1, ny1b);
                    this.context.lineTo(x1, ny1b);
                    this.context.stroke();
                    this.context.fill();
                    this.context.closePath();
                } else {
                    this.context.fillStyle = '#aba9ab';
                    // Draw Wall
                    this.context.moveTo(x1, y1a);
                    this.context.lineTo(x2, y2a);
                    this.context.lineTo(x2, y2b);
                    this.context.lineTo(x1, y1b);
                    this.context.lineTo(x1, y1a);
                    this.context.stroke();
                    this.context.fill();
                }

                // Draws vertices
                this.context.fillStyle = '#e74c3c';
                var vertexSize = 4;
                this.context.beginPath();
                this.context.fillRect(x1 - vertexSize / 2, y1a - vertexSize / 2, vertexSize, vertexSize);
                this.context.fillRect(x1 - vertexSize / 2, y1b - vertexSize / 2, vertexSize, vertexSize);
                this.context.fillRect(x2 - vertexSize / 2, y2a - vertexSize / 2, vertexSize, vertexSize);
                this.context.fillRect(x2 - vertexSize / 2, y2b - vertexSize / 2, vertexSize, vertexSize);
                this.context.closePath();
                this.context.restore();
            }

            /* Disable by default */
            /* Use the following to draw out player for rotated vectors */
            // this.context.beginPath();
            // this.context.fillStyle = 'red';
            // this.context.fillRect(this.width/2 - 4, this.height/2 - 4, 8, 8);
            // this.context.closePath();

            this.lastPosition = this.currentPosition;
        }
    }, {
        key: 'currentPosition',
        get: function get() {
            return {
                x: this.parent.x,
                y: this.parent.y
            };
        }
    }]);

    return Camera;
}();

exports.default = Camera;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _degreeConversion = __webpack_require__(11);

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

var _intersect = __webpack_require__(12);

Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
        return _intersect.intersect;
    }
});
Object.defineProperty(exports, 'intersectBox', {
    enumerable: true,
    get: function get() {
        return _intersect.intersectBox;
    }
});
Object.defineProperty(exports, 'pointSide', {
    enumerable: true,
    get: function get() {
        return _intersect.pointSide;
    }
});

var _time = __webpack_require__(13);

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
var scalerInit = exports.scalerInit = function scalerInit(a, b, c, d, f) {
    return {
        result: d + (b - 1 - a) * (f - d) / (c - a),
        bob: Math.pow(f < d, c < a) ? -1 : 1,
        fd: Math.abs(f - d),
        ca: Math.abs(c - a),
        cache: (b - 1 - a) * Math.abs(f - d) % Math.abs(c - a)
    };
};

var scalerNext = exports.scalerNext = function scalerNext(scaler) {
    var cache = scaler.cache;
    var result = scaler.result;

    for (cache += scaler.fd + scaler.fd; cache >= scaler.ca; cache -= scaler.ca) {
        result += scaler.bop;
    }

    return result;
};

var clamp = exports.clamp = function clamp(val, min, max) {
    return Math.min(Math.max(min, val), max);
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cross = function cross(x0, y0, x1, y1) {
    return x0 * y1 - x1 * y0;
};

var overlap = function overlap(a0, a1, b0, b1) {
    return Math.min(a0, a1) <= Math.max(b0, b1) && Math.min(b0, b1) <= Math.max(a0, a1);
};

var intersect = exports.intersect = function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    var x = cross(x1, y1, x2, y2);
    var y = cross(x3, y3, x4, y4);
    var det = cross(x1 - x2, y1 - y2, x3 - x4, y3 - y4);
    x = cross(x, x1 - x2, y, x3 - x4) / det;
    y = cross(x, y1 - y2, y, y3 - y4) / det;

    return { x: x, y: y };
};

var intersectBox = exports.intersectBox = function intersectBox(x0, y0, x1, y1, x2, y2, x3, y3) {
    return overlap(x0, x1, x2, x3) && overlap(y0, y1, y2, y3);
};

var pointSide = exports.pointSide = function pointSide(px, py, x0, y0, x1, y1) {
    return Math.sign(cross(x1 - x0, y1 - y0, px - x0, py - y0));
};

/***/ }),
/* 13 */
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
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0;

var GameObject = function GameObject(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === undefined ? 0 : _ref$z,
        _ref$rotation = _ref.rotation,
        rotation = _ref$rotation === undefined ? 0 : _ref$rotation;

    _classCallCheck(this, GameObject);

    this.id = id++;
    this.x = x;
    this.y = y;
    this.z = z;
    this.rotation = rotation;
    this.sector = null;
};

exports.default = GameObject;

/***/ })
/******/ ]);
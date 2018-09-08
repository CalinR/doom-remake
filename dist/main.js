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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _degreeConversion = __webpack_require__(9);

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

var _intersect = __webpack_require__(10);

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

var _time = __webpack_require__(11);

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

var _math = __webpack_require__(12);

Object.defineProperty(exports, 'clamp', {
    enumerable: true,
    get: function get() {
        return _math.clamp;
    }
});
var scalerInit = exports.scalerInit = function scalerInit(a, b, c, d, f) {
    return {
        result: d + (b - 1 - a) * (f - d) / (c - a),
        bob: f < d ^ c < a ? -1 : 1,
        fd: Math.abs(f - d),
        ca: Math.abs(c - a),
        cache: (b - 1 - a) * Math.abs(f - d) % Math.abs(c - a)
    };
};

var scalerNext = exports.scalerNext = function scalerNext(scaler) {
    for (scaler.cache += scaler.fd; scaler.cache >= scaler.ca; scaler.cache -= scaler.ca) {
        scaler.result += scaler.bob;
    }

    return scaler.result;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = exports.GameObject = exports.Camera = undefined;

var _utils = __webpack_require__(0);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _Camera = __webpack_require__(13);

var _Camera2 = _interopRequireDefault(_Camera);

var _GameObject = __webpack_require__(2);

var _GameObject2 = _interopRequireDefault(_GameObject);

var _Scene = __webpack_require__(14);

var _Scene2 = _interopRequireDefault(_Scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Camera = _Camera2.default;
exports.GameObject = _GameObject2.default;
exports.Scene = _Scene2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var id = 0;

var GameObject = function () {
    function GameObject(_ref) {
        var _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y,
            _ref$z = _ref.z,
            z = _ref$z === undefined ? 0 : _ref$z,
            _ref$rotation = _ref.rotation,
            rotation = _ref$rotation === undefined ? 0 : _ref$rotation,
            _ref$sector = _ref.sector,
            sector = _ref$sector === undefined ? null : _ref$sector;

        _classCallCheck(this, GameObject);

        this.id = id++;
        this.state = {
            x: x,
            y: y,
            z: z,
            rotation: rotation,
            velocity: {
                x: 0,
                y: 0
            },
            sector: sector
        };
        this.onMove = null;
    }

    _createClass(GameObject, [{
        key: 'queueUpdate',
        value: function queueUpdate() {
            var oldState = Object.assign({}, this.state);
            this.update();
            if (this.velocity.x != 0 && this.velocity.y != 0) {
                if (typeof this.onMove == 'function') {
                    this.onMove(oldState, Object.assign({}, this.state), this);
                }
            }
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'x',
        get: function get() {
            return this.state.x;
        },
        set: function set(x) {
            this.state.x = x;
        }
    }, {
        key: 'y',
        get: function get() {
            return this.state.y;
        },
        set: function set(y) {
            this.state.y = y;
        }
    }, {
        key: 'z',
        get: function get() {
            return this.state.z;
        },
        set: function set(z) {
            this.state.z = z;
        }
    }, {
        key: 'rotation',
        get: function get() {
            return this.state.rotation;
        },
        set: function set(rotation) {
            this.state.rotation = rotation;
        }
    }, {
        key: 'velocity',
        get: function get() {
            return this.state.velocity;
        },
        set: function set(velocity) {
            this.state.velocity = velocity;
        }
    }, {
        key: 'sector',
        get: function get() {
            return this.state.sector;
        },
        set: function set(sector) {
            this.state.sector = sector;
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(4);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Game2.default();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loadLevel = __webpack_require__(5);

var _loadLevel2 = _interopRequireDefault(_loadLevel);

var _softwareRenderer = __webpack_require__(1);

var _Player = __webpack_require__(15);

var _Player2 = _interopRequireDefault(_Player);

var _Map = __webpack_require__(16);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.map = new _Map2.default(document.getElementById('map'));
        this.scene = new _softwareRenderer.Scene();
        this.level = (0, _loadLevel2.default)('demo2');
        // use the following coordinates to test bug
        // 37.66, 23.99
        this.player = new _Player2.default({ x: 37.66, y: 23.99, z: 0, rotation: 89, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' } });
        // this.player = new Player({ x: 15, y: 10, z: 0, rotation: 0, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }});
        this.camera = new _softwareRenderer.Camera({ z: 3, parent: this.player, world: this.level, element: document.getElementById('camera') }); // Rework camera logic
        this.scene.add(this.player);
        this.scene.addWorld(this.level);
        this.updateLoop();
        window.player = this.player;
        window.camera = this.camera;
    }

    _createClass(Game, [{
        key: 'updateLoop',
        value: function updateLoop() {
            var _this = this;

            this.scene.update();
            this.map.render(this.level, this.player);
            this.camera.render();
            // console.log(this.player.x, this.player.y);
            window.requestAnimationFrame(function () {
                return _this.updateLoop();
            });
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy = __webpack_require__(6);

var _Enemy2 = _interopRequireDefault(_Enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levels = {
    demo: __webpack_require__(7),
    demo2: __webpack_require__(8)
};

function LevelException(message) {
    this.message = message;
    this.name = 'LevelException';
}

var loadLevel = function loadLevel(name) {
    if (levels[name]) {
        var level = levels[name];
        level.enemies = level.enemies.map(function (enemy) {
            return new _Enemy2.default({ x: enemy.x, y: enemy.y, sector: enemy.sector });
        });
        return level;
    } else {
        throw new LevelException('Invalid Level Name');
    }
};

exports.default = loadLevel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function Enemy(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === undefined ? 0 : _ref$z,
        _ref$sector = _ref.sector,
        sector = _ref$sector === undefined ? -1 : _ref$sector;

    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.z = z;
    this.sector = sector;
};

exports.default = Enemy;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"sectors":[{"id":0,"floor":0,"ceiling":60,"vertices":[{"x":20,"y":50,"neighbour":-1},{"x":50,"y":20,"neighbour":-1},{"x":150,"y":20,"neighbour":-1},{"x":180,"y":50,"neighbour":1},{"x":180,"y":150,"neighbour":-1},{"x":150,"y":180,"neighbour":-1},{"x":50,"y":180,"neighbour":-1},{"x":20,"y":150,"neighbour":-1}]},{"id":1,"floor":10,"ceiling":50,"vertices":[{"x":180,"y":50,"neighbour":-1},{"x":300,"y":50,"neighbour":2},{"x":300,"y":150,"neighbour":-1},{"x":180,"y":150,"neighbour":0}]},{"id":2,"floor":0,"ceiling":60,"vertices":[{"x":300,"y":50,"neighbour":-1},{"x":330,"y":20,"neighbour":-1},{"x":430,"y":20,"neighbour":-1},{"x":460,"y":50,"neighbour":-1},{"x":460,"y":150,"neighbour":-1},{"x":430,"y":180,"neighbour":4},{"x":330,"y":180,"neighbour":3},{"x":300,"y":150,"neighbour":1}]},{"id":3,"floor":0,"ceiling":60,"vertices":[{"x":300,"y":150,"neighbour":2},{"x":330,"y":180,"neighbour":-1},{"x":260,"y":240,"neighbour":-1},{"x":230,"y":210,"neighbour":-1}]},{"id":4,"floor":0,"ceiling":60,"vertices":[{"x":430,"y":180,"neighbour":-1},{"x":400,"y":200,"neighbour":5},{"x":360,"y":200,"neighbour":-1},{"x":330,"y":180,"neighbour":2}]},{"id":5,"floor":10,"ceiling":110,"vertices":[{"x":400,"y":200,"neighbour":-1},{"x":400,"y":220,"neighbour":6},{"x":360,"y":220,"neighbour":-1},{"x":360,"y":200,"neighbour":4}]},{"id":6,"floor":20,"ceiling":110,"vertices":[{"x":400,"y":220,"neighbour":-1},{"x":400,"y":240,"neighbour":7},{"x":360,"y":240,"neighbour":-1},{"x":360,"y":220,"neighbour":5}]},{"id":7,"floor":30,"ceiling":110,"vertices":[{"x":400,"y":240,"neighbour":-1},{"x":400,"y":260,"neighbour":8},{"x":360,"y":260,"neighbour":-1},{"x":360,"y":240,"neighbour":6}]},{"id":8,"floor":40,"ceiling":110,"vertices":[{"x":400,"y":260,"neighbour":-1},{"x":400,"y":280,"neighbour":9},{"x":360,"y":280,"neighbour":-1},{"x":360,"y":260,"neighbour":7}]},{"id":9,"floor":50,"ceiling":110,"vertices":[{"x":400,"y":280,"neighbour":-1},{"x":440,"y":280,"neighbour":-1},{"x":440,"y":390,"neighbour":-1},{"x":320,"y":390,"neighbour":-1},{"x":320,"y":280,"neighbour":-1},{"x":360,"y":280,"neighbour":8}]}],"enemies":[{"x":250,"y":100,"sector":1}]}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"sectors":[{"id":0,"floor":0,"ceiling":6,"vertices":[{"x":2,"y":5,"neighbour":-1},{"x":5,"y":2,"neighbour":-1},{"x":15,"y":2,"neighbour":-1},{"x":18,"y":5,"neighbour":1},{"x":18,"y":15,"neighbour":-1},{"x":15,"y":18,"neighbour":-1},{"x":5,"y":18,"neighbour":-1},{"x":2,"y":15,"neighbour":-1}]},{"id":1,"floor":1,"ceiling":5,"vertices":[{"x":18,"y":5,"neighbour":-1},{"x":30,"y":5,"neighbour":2},{"x":30,"y":15,"neighbour":-1},{"x":18,"y":15,"neighbour":0}]},{"id":2,"floor":0,"ceiling":6,"vertices":[{"x":30,"y":5,"neighbour":-1},{"x":33,"y":2,"neighbour":-1},{"x":43,"y":2,"neighbour":-1},{"x":46,"y":5,"neighbour":-1},{"x":46,"y":15,"neighbour":-1},{"x":43,"y":18,"neighbour":4},{"x":33,"y":18,"neighbour":3},{"x":30,"y":15,"neighbour":1}]},{"id":3,"floor":0,"ceiling":6,"vertices":[{"x":30,"y":15,"neighbour":2},{"x":33,"y":18,"neighbour":-1},{"x":26,"y":24,"neighbour":-1},{"x":23,"y":21,"neighbour":-1}]},{"id":4,"floor":0,"ceiling":6,"vertices":[{"x":43,"y":18,"neighbour":-1},{"x":40,"y":20,"neighbour":5},{"x":36,"y":20,"neighbour":-1},{"x":33,"y":18,"neighbour":2}]},{"id":5,"floor":1,"ceiling":11,"vertices":[{"x":40,"y":20,"neighbour":-1},{"x":40,"y":22,"neighbour":6},{"x":36,"y":22,"neighbour":-1},{"x":36,"y":20,"neighbour":4}]},{"id":6,"floor":2,"ceiling":11,"vertices":[{"x":40,"y":22,"neighbour":-1},{"x":40,"y":24,"neighbour":7},{"x":36,"y":24,"neighbour":-1},{"x":36,"y":22,"neighbour":5}]},{"id":7,"floor":3,"ceiling":11,"vertices":[{"x":40,"y":24,"neighbour":-1},{"x":40,"y":26,"neighbour":8},{"x":36,"y":26,"neighbour":-1},{"x":36,"y":24,"neighbour":6}]},{"id":8,"floor":4,"ceiling":11,"vertices":[{"x":40,"y":26,"neighbour":-1},{"x":40,"y":28,"neighbour":9},{"x":36,"y":28,"neighbour":-1},{"x":36,"y":26,"neighbour":7}]},{"id":9,"floor":5,"ceiling":11,"vertices":[{"x":40,"y":28,"neighbour":-1},{"x":44,"y":28,"neighbour":-1},{"x":44,"y":39,"neighbour":-1},{"x":32,"y":39,"neighbour":-1},{"x":32,"y":28,"neighbour":-1},{"x":36,"y":28,"neighbour":8}]}],"enemies":[]}

/***/ }),
/* 9 */
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
/* 10 */
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

var intersectBox = exports.intersectBox = function intersectBox(x0, y0, x1, y1, x2, y2, x3, y3) {
    return overlap(x0, x1, x2, x3) && overlap(y0, y1, y2, y3);
};

var pointSide = exports.pointSide = function pointSide(px, py, x0, y0, x1, y1) {
    return Math.sign(cross(x1 - x0, y1 - y0, px - x0, py - y0));
};

var intersectLines = exports.intersectLines = function intersectLines(x0, y0, x1, y1, x2, y2, x3, y3) {
    // Go here to see demonstation https://jsfiddle.net/qc705skx/4/
    // Math from https://gamedev.stackexchange.com/questions/26004/how-to-detect-2d-line-on-line-collision

    // const denominator = ((x1 - x0) * (y3 - y2)) - ((y1 - y0) * (x3 - x2));
    // const numerator1  = ((y0 - y2) * (x3 - x2)) - ((x0 - x2) * (y3 - y2));
    // const numerator2  = ((y0 - y2) * (x1 - x0)) - ((x0 - x2) * (y1 - y0));
    var denominator = cross(x1 - x0, x3 - x2, y1 - y0, y3 - y2);
    var numerator1 = cross(y0 - y2, y3 - y2, x0 - x2, x3 - x2);
    var numerator2 = cross(y0 - y2, y1 - y0, x0 - x2, x1 - x0);

    if (denominator == 0) {
        return numerator1 == 0 && numerator2 == 0;
    }

    var r = numerator1 / denominator;
    var s = numerator2 / denominator;

    return r > 0 && r <= 1 && s >= 0 && s <= 1;
};

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var clamp = exports.clamp = function clamp(val, min, max) {
    return Math.min(Math.max(min, val), max);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _GameObject = __webpack_require__(2);

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
        // this.hfov = (1.0 * 0.73 * this.height / this.width); // This should be 0.6 (60)
        // this.vfov = (1.0 * .2); // This should be hfov / aspect ratio. (3/4 = .75 = 0.6 * .75 = 0.45)
        this.hfov = 0.6;
        this.vfov = 0.45;
        this.context = element.getContext('2d');
        this.lastPosition = {
            x: parent.x,
            y: parent.y
        };
        this.sector = this.getActiveSector(); // This shouldn't be handled by the camera. This should be handled by the game code which would check on every frame which objects have changed sectors.
        this.cached = {
            ytop: [],
            ybottom: []
        };

        Camera.optimizeCanvas(element);
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
                for (var _iterator = this.world.sectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.world.sectors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var sector = _step2.value;

                    for (var i = 0; i < sector.vertices.length; i++) {
                        var vx1 = sector.vertices[i].x;
                        var vy1 = sector.vertices[i].y;
                        var vx2 = i >= sector.vertices.length - 1 ? sector.vertices[0].x : sector.vertices[i + 1].x;
                        var vy2 = i >= sector.vertices.length - 1 ? sector.vertices[0].y : sector.vertices[i + 1].y;

                        if ((0, _utils.intersectBox)(this.currentPosition.x, this.currentPosition.y, this.lastPosition.x, this.lastPosition.y, vx1, vy1, vx2, vy2)) {
                            // console.log(pointSide(this.currentPosition.x, this.currentPosition.y, vx1, vy1, vx2, vy2));
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
        key: 'renderSector',
        value: function renderSector(sector, sx1, sx2, ytop, ybottom) {
            if (!sector) {
                return false;
            }

            for (var i = 0; i < sector.vertices.length; i++) {
                var vx1 = sector.vertices[i].x - this.parent.x;
                var vy1 = sector.vertices[i].y - this.parent.y;
                var vx2 = (i >= sector.vertices.length - 1 ? sector.vertices[0].x : sector.vertices[i + 1].x) - this.parent.x;
                var vy2 = (i >= sector.vertices.length - 1 ? sector.vertices[0].y : sector.vertices[i + 1].y) - this.parent.y;

                // rotate points around player
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
                if (tz1 <= 0) {
                    tx1 = (0.0001 - tz1) * (tx2 - tx1) / (tz2 - tz1) + tx1;
                    tz1 = 0.0001;
                }
                if (tz2 <= 0) {
                    tx2 = (0.0001 - tz2) * (tx1 - tx2) / (tz1 - tz2) + tx2;
                    tz2 = 0.0001;
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
                    nyceil = this.world.sectors[neighbour].ceiling - (this.parent.z + this.z);
                    nyfloor = this.world.sectors[neighbour].floor - (this.parent.z + this.z);
                }

                var ny1a = this.height / 2 + -this.yaw(nyceil, tz1) * yscale1;
                var ny1b = this.height / 2 + -this.yaw(nyfloor, tz1) * yscale1;
                var ny2a = this.height / 2 + -this.yaw(nyceil, tz2) * yscale2;
                var ny2b = this.height / 2 + -this.yaw(nyfloor, tz2) * yscale2;

                var beginX = parseInt(Math.max(x1, sx1));
                var endX = parseInt(Math.min(x2, sx2));

                var zInt = (0, _utils.scalerInit)(x1, beginX, x2, tz1 * 4, tz2 * 4);

                // Is the wall on screen
                if (endX < 0 || beginX > this.width) {
                    continue;
                }

                var nytop = [];
                var nybottom = [];

                for (var x = beginX; x < endX; x++) {
                    /* Acquire the Y coordinates for our floor & ceiling for this X coordinate */
                    var ya = (x - x1) * (y2a - y1a) / (x2 - x1) + y1a;
                    var yb = (x - x1) * (y2b - y1b) / (x2 - x1) + y1b;

                    var z = (0, _utils.scalerNext)(zInt);
                    zInt.result = z;

                    /* Clamp the ya & yb */
                    var cya = (0, _utils.clamp)(ya, ytop[x], ybottom[x]);
                    var cyb = (0, _utils.clamp)(yb, ytop[x], ybottom[x]);

                    nytop[x] = parseInt(cya + 1);
                    nybottom[x] = parseInt(cyb);

                    /* Render ceiling: everything above this sector's ceiling height. */
                    this.vline(x, ytop[x], cya + 1, '#34495e');
                    /* Render floor: everything below this sector's floor height. */
                    this.vline(x, cyb, ybottom[x] + 1, '#3498db');

                    if (neighbour < 0) {
                        var r = parseInt(255 - z);
                        this.vline(x, cya + 1, cyb + 1, x == beginX || x == endX ? 'rgb(' + r + ', ' + r + ', ' + r + ')' : 'rgb(' + r + ', ' + r + ', ' + r + ')');
                    } else {
                        /* Aquire the Y coordinates for our neighbour's floor and ceiling for this X coordinate */
                        var nya = (x - x1) * (ny2a - ny1a) / (x2 - x1) + ny1a;
                        var nyb = (x - x1) * (ny2b - ny1b) / (x2 - x1) + ny1b;

                        var cnya = (0, _utils.clamp)(nya, ytop[x], ybottom[x]);
                        var cnyb = (0, _utils.clamp)(nyb, ytop[x], ybottom[x]);

                        // If our ceiling is higher than the neighours ceiling, render it
                        if (cnya > cya) {
                            var ceilingColor = parseInt(255 - z);
                            this.vline(x, cya, cnya + 1, x == beginX || x == endX ? 'rgb(' + ceilingColor + ', ' + ceilingColor + ', ' + ceilingColor + ')' : 'rgb(' + ceilingColor + ', ' + ceilingColor + ', ' + ceilingColor + ')');
                            nytop[x] = parseInt((0, _utils.clamp)(cnya, nytop[x], this.height));
                        } else {
                            nytop[x] = parseInt((0, _utils.clamp)(cya, nytop[x], this.height));
                        }

                        // If our floor is lower than the neighbours floor, render it
                        if (cyb > cnyb) {
                            var floorColor = {
                                r: parseInt(52 - z),
                                g: parseInt(152 - z),
                                b: parseInt(219 - z)
                            };
                            this.vline(x, cnyb - 1, cyb, x == beginX || x == endX ? 'rgb(' + floorColor.r + ', ' + floorColor.g + ', ' + floorColor.b + ')' : 'rgb(' + floorColor.r + ', ' + floorColor.g + ', ' + floorColor.b + ')');
                            nybottom[x] = parseInt((0, _utils.clamp)(cnyb, 0, ybottom[x]));
                        } else {
                            nybottom[x] = parseInt((0, _utils.clamp)(cyb, 0, ybottom[x]));
                        }
                    }
                }

                if (neighbour > -1) {
                    if (ybottom.length) {
                        this.cached.ybottom[sector.id] = ybottom;
                    }
                    if (ytop.length) {
                        this.cached.ytop[sector.id] = ytop;
                    }
                    this.renderSector(this.world.sectors[neighbour], beginX, endX, nytop, nybottom);
                }
            }
        }
    }, {
        key: 'renderSprites',
        value: function renderSprites() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.world.enemies[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var sprite = _step3.value;

                    if (!this.cached.ybottom[sprite.sector] && !this.cached.ytop[sprite.sector]) {
                        continue;
                    }

                    var mask = {
                        ybottom: this.cached.ybottom[sprite.sector],
                        ytop: this.cached.ytop[sprite.sector]
                        // console.log(mask, sprite);
                    };var vx1 = sprite.x - this.parent.x;
                    var vy1 = sprite.y - this.parent.y;

                    // rotate sprite around player
                    var angle = (0, _utils.toRadians)(this.parent.rotation);
                    var pcos = Math.cos(angle);
                    var psin = Math.sin(angle);
                    var otx1 = vx1 * psin - vy1 * pcos;
                    var tz1 = vx1 * pcos + vy1 * psin;

                    /* Is the wall at least partially in front of the player? */
                    if (tz1 <= 0) continue;

                    /* Do perspective transformation */
                    var tx1 = otx1 - 5; // 5 needs to be sprite size / 2
                    var tx2 = otx1 + 5; // 5 needs to be sprite size / 2
                    var xscale1 = this.width * this.hfov / tz1;
                    var yscale1 = this.height * this.vfov / tz1;
                    var x1 = this.width / 2 + -tx1 * xscale1;
                    var x2 = this.width / 2 + -tx2 * xscale1;
                    var ox1 = this.width / 2 + -otx1 * xscale1;
                    var diff = Math.max(x1, x2) - Math.min(x1, x2);
                    var yfloor = 0 - (this.z + this.parent.z); // 0 needs to be sprite's z coordinate
                    var y1b = this.height / 2 + -this.yaw(yfloor, tz1) * yscale1;
                    var y1a = y1b - diff;

                    /* Calculate mask */
                    // const ybottomEnd = Object.keys(mask.ybottom)[mask.ybottom.length-1];
                    // const ybottomStart = Object.keys(mask.ybottom)[0];
                    // const ytopEnd = Object.keys(mask.ytop)[mask.ytop.length-1];
                    // const ytopStart = Object.keys(mask.ytop)[0];
                    // const startRange = parseInt(Math.min(ybottomEnd, ytopEnd));
                    // const endRange = parseInt(Math.max(ybottomStart, ytopStart));
                    // const start = Math.min(startRange, endRange);
                    // const end = Math.max(startRange, endRange);
                    // const beginX = clamp(parseInt(x1-diff), start, end);
                    // const endX = clamp(parseInt(x1), start, end);

                    // /* TODO: Optimize this and fix bug where sprite disappears */
                    // for(let x=beginX; x<=endX; x++){
                    //     const topY = Math.max(y1a, mask.ytop[x]);
                    //     const bottomY = Math.min(y1a+diff, mask.ybottom[x]);
                    //     this.vline(x, topY, bottomY, '#2ecc71');
                    // }

                    // Draw sprite outline
                    this.context.beginPath();
                    this.context.strokeStyle = '#000000';
                    this.context.fillStyle = '#2ecc71';
                    this.context.rect(x1 - diff, y1a, diff, diff);
                    this.context.fill();
                    this.context.stroke();
                    this.context.closePath();

                    // Draw centre line of sprite
                    // this.context.beginPath();
                    // this.context.strokeStyle = '#000000';
                    // this.context.moveTo(ox1, y1a);
                    // this.context.lineTo(ox1, y1b);
                    // this.context.stroke();
                    // this.context.closePath();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: 'vline',
        value: function vline(x, y1, y2, color) {
            this.context.beginPath();
            this.context.strokeStyle = color;
            this.context.moveTo(x - 0.5, y1);
            this.context.lineTo(x - 0.5, y2);
            this.context.stroke();
            this.context.closePath();
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

            var sector = this.world.sectors[this.sector];

            var ytop = [];
            var ybottom = [];

            for (var x = 0; x < this.width - 1; x++) {
                ytop[x] = 0;
                ybottom[x] = this.height - 1;
            }

            this.renderSector(sector, 0, this.width - 1, ytop, ybottom);
            this.renderSprites();
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
    }], [{
        key: 'optimizeCanvas',
        value: function optimizeCanvas(canvas) {
            // canvas.style.imageRendering = 'optimizeSpeed'; // Older versions of FF
            // canvas.style.imageRendering = '-moz-crisp-edges'; // FF 6.0+
            // canvas.style.imageRendering = '-webkit-optimize-contrast'; // Safari
            // canvas.style.imageRendering = '-o-crisp-edges'; // Opera 12+
            canvas.style.imageRendering = 'pixelated'; // Modern Browsers
            // canvas.style['-ms-interpolation-mode'] = 'nearest-neighor'; // IE
        }
    }]);

    return Camera;
}();

exports.default = Camera;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
    function Scene() {
        var world = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Scene);

        this.objects = [];
        this.world = world;
    }

    _createClass(Scene, [{
        key: 'addWorld',
        value: function addWorld(world) {
            this.world = world;
        }
    }, {
        key: 'add',
        value: function add(object) {
            var _this = this;

            object.onMove = function (prevState, currentState, object) {
                return _this.objectMoved(prevState, currentState, object);
            };
            this.objects.push(object);
        }
    }, {
        key: 'objectMoved',
        value: function objectMoved(prevState, currentState, object) {
            // if(object.x < 10){
            //     object.x = 10;
            //     object.velocity.x = 0;
            // }
            // console.log('moved', prevState, currentState, object);
        }
    }, {
        key: 'update',
        value: function update() {
            (0, _utils.updateTime)();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var object = _step.value;

                    object.queueUpdate();
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
    }]);

    return Scene;
}();

exports.default = Scene;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _softwareRenderer = __webpack_require__(1);

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
        _this.moveSpeed = 5;
        _this.rotationSpeed = 130;
        _this.direction = 0;
        _this.friction = 0.97;
        _this.controls = controls;
        _this.bindControls();
        _this.moving = 0;
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
                        _this2.moving = 1;
                        break;
                    case _this2.controls.backward:
                        _this2.moving = -1;
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
                        _this2.moving = 0;
                        break;
                    case _this2.controls.backward:
                        _this2.moving = 0;
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
            if (this.moving == 1) {
                if (this.speed < this.moveSpeed) {
                    this.speed++;
                }
            } else if (this.moving == -1) {
                if (this.speed > -this.moveSpeed) {
                    this.speed--;
                }
            } else if (this.speed != 0) {
                this.speed *= this.friction;
            }

            this.speed = Number(parseFloat(this.speed).toFixed(2));

            if (this.speed < 0.2 && this.speed > 0) {
                this.speed = 0;
            } else if (this.speed > -0.2 && this.speed < 0) {
                this.speed = 0;
            }

            if (this.sector) {
                this.z = this.sector.floor;
            }
            var rotation = this.rotation + this.direction * this.rotationSpeed * _softwareRenderer.deltaTime;

            if (rotation > 360) {
                rotation = 0;
            } else if (rotation < 0) {
                rotation = rotation + 360;
            }

            // const moveStep = this.moving * this.moveSpeed;
            var moveStep = this.speed;
            var radians = (0, _softwareRenderer.toRadians)(rotation);
            var moveX = Math.cos(radians) * moveStep;
            var moveY = Math.sin(radians) * moveStep;
            this.velocity.x = moveX * _softwareRenderer.deltaTime;
            this.velocity.y = moveY * _softwareRenderer.deltaTime;

            // const x = this.x + (moveX * deltaTime);
            // const y = this.y + (moveY * deltaTime);

            // this.x = x;
            // this.y = y;
            this.rotation = rotation;
        }
    }]);

    return Player;
}(_softwareRenderer.GameObject);

exports.default = Player;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _softwareRenderer = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
    function Map() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var playerSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

        _classCallCheck(this, Map);

        this.element = element;
        this.context = element.getContext('2d');
        this.playerSize = playerSize;
        this.mapSize = 10;
    }

    _createClass(Map, [{
        key: 'resize',
        value: function resize(vertex) {
            return vertex * this.mapSize;
        }
    }, {
        key: 'render',
        value: function render(level, player) {
            this.context.clearRect(0, 0, this.element.width, this.element.height);
            this.context.save();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = level.sectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector = _step.value;

                    this.context.beginPath();
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = sector.vertices.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _step2$value = _slicedToArray(_step2.value, 2),
                                index = _step2$value[0],
                                vertex = _step2$value[1];

                            if (index === 0) {
                                this.context.moveTo(this.resize(vertex.x), this.resize(vertex.y));
                            } else {
                                this.context.strokeStyle = 'black';
                                this.context.lineTo(this.resize(vertex.x), this.resize(vertex.y));
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

                    this.context.lineTo(this.resize(sector.vertices[0].x), this.resize(sector.vertices[0].y));
                    this.context.stroke();
                    this.context.closePath();
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

            this.context.restore();

            this.context.save();
            this.context.beginPath();
            this.context.translate(this.resize(player.x), this.resize(player.y));
            this.context.rotate((0, _softwareRenderer.toRadians)(player.rotation));
            this.context.fillStyle = 'red';
            this.context.fillRect(0, -1, 10, 2);
            this.context.fillRect(-this.playerSize / 2, -this.playerSize / 2, this.playerSize, this.playerSize);
            this.context.closePath();
            this.context.restore();
        }
    }]);

    return Map;
}();

exports.default = Map;

/***/ })
/******/ ]);
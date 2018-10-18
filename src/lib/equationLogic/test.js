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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(8));
__export(__webpack_require__(3));
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(9));
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(1));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var equationLogic_2 = __webpack_require__(0);
var EquationSolver;
(function (EquationSolver) {
    var InputParser = /** @class */ (function () {
        function InputParser() {
            this.input = "";
        }
        InputParser.prototype.toString = function () {
            return this.top.toString();
        };
        InputParser.prototype.parseInput = function (input) {
            //console.log(input);
            this.input = input;
            this.input = this.input.replace(" ", "");
            this.fixInput();
            this.top = new equationLogic_1.ParentNode();
            var directionIsleft = this.top.directionIsLeft() || true;
            for (var i = 0; i < this.input.length; i++) {
                var node = equationLogic_2.NodeFactory.createNode(this.input[i]);
                directionIsleft = node.directionIsLeft() === undefined ? directionIsleft : node.directionIsLeft();
                if (directionIsleft) {
                    this.top.addLeft(node);
                }
                else {
                    debugger;
                    this.top.addRight(node);
                }
            }
            this.top.postCreate();
            this.top.simplify();
        };
        InputParser.prototype.fixInput = function () {
            var _this = this;
            var regexes = [
                new RegExp(/([0-9]+|[A-z])\(/gm),
                new RegExp(/\)([0-9]+|[A-z])/gm),
                new RegExp(/([0-9]+|[A-z])[A-z]/gm),
                new RegExp(/([A-z])[0-9]+/gm)
            ];
            this.input = this.input.replace(")(", ")*(");
            regexes.forEach(function (regex) {
                var m;
                while ((m = regex.exec(_this.input)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    m.forEach(function (match, groupIndex) {
                        var index = m.index + match.length;
                        if (groupIndex > 0) {
                            _this.input = (_this.input.substring(0, index) + ("*" + _this.input.substring(index)));
                        }
                    });
                }
            });
        };
        return InputParser;
    }());
    EquationSolver.InputParser = InputParser;
})(EquationSolver = exports.EquationSolver || (exports.EquationSolver = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var AddNode = /** @class */ (function (_super) {
    __extends(AddNode, _super);
    function AddNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 3;
        return _this;
    }
    AddNode.prototype.getSign = function () {
        return "+";
    };
    AddNode.prototype.simplify = function () {
        _super.prototype.simplify.call(this);
        _super.prototype.handleSimplifyWithOperation.call(this, AddNode.createAddNode);
    };
    AddNode.createAddNode = function (first, second) {
        return first + second;
    };
    AddNode.prototype.directionIsLeft = function () {
        return true;
    };
    return AddNode;
}(equationLogic_1.Node));
exports.AddNode = AddNode;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var ConstantNode = /** @class */ (function (_super) {
    __extends(ConstantNode, _super);
    function ConstantNode(value) {
        var _this = _super.call(this) || this;
        _this.key = 1;
        _this.value = value;
        return _this;
    }
    ConstantNode.prototype.directionIsLeft = function () {
        return undefined;
    };
    ConstantNode.prototype.getValue = function () {
        return this.value;
    };
    ConstantNode.prototype.getJson = function () {
        return this.value;
    };
    ConstantNode.prototype.getSign = function () {
        return this.value.toString();
    };
    return ConstantNode;
}(equationLogic_1.Node));
exports.ConstantNode = ConstantNode;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var DivideNode = /** @class */ (function (_super) {
    __extends(DivideNode, _super);
    function DivideNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 2;
        return _this;
    }
    DivideNode.prototype.simplify = function () {
        _super.prototype.simplify.call(this);
        _super.prototype.handleSimplifyWithOperation.call(this, DivideNode.createDivideNode);
    };
    DivideNode.createDivideNode = function (first, second) {
        return first / second;
    };
    DivideNode.prototype.directionIsLeft = function () {
        return false;
    };
    DivideNode.prototype.postCreate = function () {
        var right = this.rightChild;
        this.rightChild = this.leftChild;
        this.leftChild = right;
        _super.prototype.postCreate.call(this);
    };
    DivideNode.prototype.getSign = function () {
        return "/";
    };
    return DivideNode;
}(equationLogic_1.Node));
exports.DivideNode = DivideNode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var equationLogic_2 = __webpack_require__(0);
var equationLogic_3 = __webpack_require__(0);
var MinNode = /** @class */ (function (_super) {
    __extends(MinNode, _super);
    function MinNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 3;
        return _this;
    }
    MinNode.prototype.directionIsLeft = function () {
        return true;
    };
    MinNode.prototype.postCreate = function () {
        _super.prototype.postCreate.call(this);
        if (this.rightChild instanceof MinNode) {
            var node = equationLogic_3.NodeFactory.createNode("+");
            node.cloneInto(this.rightChild);
            this.rightChild = node;
            node.parent = this;
        }
        else if (this.rightChild instanceof equationLogic_2.AddNode) {
            var node = equationLogic_3.NodeFactory.createNode("-");
            node.cloneInto(this.rightChild);
            this.rightChild = node;
            node.parent = this;
        }
    };
    MinNode.prototype.simplify = function () {
        _super.prototype.simplify.call(this);
        _super.prototype.handleSimplifyWithOperation.call(this, MinNode.createMinNode);
    };
    MinNode.createMinNode = function (first, second) {
        return first - second;
    };
    MinNode.prototype.getSign = function () {
        return "-";
    };
    return MinNode;
}(equationLogic_1.Node));
exports.MinNode = MinNode;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var equationLogic_2 = __webpack_require__(0);
var equationLogic_3 = __webpack_require__(0);
var equationLogic_4 = __webpack_require__(0);
var MultiplyNode = /** @class */ (function (_super) {
    __extends(MultiplyNode, _super);
    function MultiplyNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 2;
        return _this;
    }
    MultiplyNode.prototype.simplify = function () {
        _super.prototype.simplify.call(this);
        if (this.leftChild instanceof equationLogic_2.ConstantNode && this.rightChild instanceof equationLogic_2.ConstantNode) {
            var newChild = equationLogic_3.NodeFactory.createNode("" + (this.leftChild.getValue() * this.rightChild.getValue()));
            this.getParent().replaceChild(this, newChild);
            return;
        }
        if (this.checkIfMultiplyWithConstant()) {
            return;
        }
        if (this.leftChild instanceof equationLogic_4.VariableNode && this.rightChild instanceof equationLogic_4.VariableNode) {
            if (this.leftChild.getName() === this.rightChild.getName()) {
                this.leftChild.setValue(this.leftChild.getValue() * this.rightChild.getValue());
                this.getParent().replaceChild(this, this.leftChild);
            }
        }
    };
    MultiplyNode.prototype.checkIfMultiplyWithConstant = function () {
        if (this.leftChild instanceof equationLogic_2.ConstantNode && this.rightChild instanceof equationLogic_4.VariableNode) {
            this.rightChild.setValue(this.rightChild.getValue() * this.leftChild.getValue());
            this.getParent().replaceChild(this, this.rightChild);
            return true;
        }
        if (this.leftChild instanceof equationLogic_4.VariableNode && this.rightChild instanceof equationLogic_2.ConstantNode) {
            this.leftChild.setValue(this.leftChild.getValue() * this.rightChild.getValue());
            this.getParent().replaceChild(this, this.leftChild);
            return true;
        }
        return false;
    };
    MultiplyNode.prototype.postCreate = function () {
        this.checkIfMultiplyWithConstant();
    };
    /*
      public multiplySimplify(node : Node, operation:(first : number, second : number) => Node) : Node{
        if(node instanceof MultiplyNode){

          if(!(this.leftChild instanceof ConstantNode && this.rightChild instanceof VariableNode) && !(this.leftChild instanceof VariableNode && this.rightChild instanceof ConstantNode)){
            return node;
          }

          if(!(node.leftChild instanceof ConstantNode && node.rightChild instanceof VariableNode) && !(node.leftChild instanceof VariableNode && node.rightChild instanceof ConstantNode)){
            return node;
          }

          if(this.leftChild instanceof ConstantNode && this.rightChild instanceof VariableNode){
            if(node.leftChild instanceof ConstantNode && node.rightChild instanceof VariableNode){
              if(this.rightChild.getValue() === node.rightChild.getValue()){
                const multi = operation(this.leftChild.getValue() , node.leftChild.getValue());
                multi.addRight(this.rightChild);
                return multi;
              }
            }

            if(node.leftChild instanceof VariableNode && node.rightChild instanceof ConstantNode){
              if(this.rightChild.getValue() === node.leftChild.getValue()){
                const multi = operation(this.leftChild.getValue() , node.rightChild.getValue());
                multi.addRight(this.rightChild);
                return multi;
              }
            }

          }

          if(this.leftChild instanceof VariableNode && this.rightChild instanceof ConstantNode){
            if(node.leftChild instanceof VariableNode && node.rightChild instanceof ConstantNode){
              if(this.rightChild.getValue() === node.rightChild.getValue()){
                const multi = operation(this.rightChild.getValue() , node.rightChild.getValue());
                multi.addRight(this.leftChild);
                return multi;
              }
            }

            if(node.leftChild instanceof ConstantNode && node.rightChild instanceof VariableNode){
              if(this.rightChild.getValue() === node.leftChild.getValue()){
                const multi = operation(this.rightChild.getValue() , node.leftChild.getValue());
                multi.addRight(this.leftChild);
                return multi;
              }
            }
          }
        }
        return node;
      }
    */
    MultiplyNode.prototype.directionIsLeft = function () {
        return false;
    };
    MultiplyNode.prototype.getSign = function () {
        return "*";
    };
    return MultiplyNode;
}(equationLogic_1.Node));
exports.MultiplyNode = MultiplyNode;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var equationLogic_2 = __webpack_require__(0);
var equationLogic_3 = __webpack_require__(0);
var equationLogic_4 = __webpack_require__(0);
var Node = /** @class */ (function () {
    function Node() {
        /**
         * The children of the node, because node is a binary three. The maximum of children is 2.
         */
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
    Node.prototype.getParent = function () {
        return this.parent;
    };
    Node.prototype.getTop = function () {
        var parent = this;
        while (!(parent.getParent() instanceof equationLogic_4.ParentNode)) {
            parent = parent.getParent();
        }
        return parent;
    };
    Node.prototype.calculateTreeWalk = function (node, height, leftMain) {
        if (leftMain === void 0) { leftMain = true; }
        var main = leftMain ? this.leftChild : this.rightChild;
        var second = !leftMain ? this.leftChild : this.rightChild;
        var right = false;
        var left = false;
        if (height > 0) {
            left = main.calculateTreeWalk(node, height - 1, leftMain);
            if (!left) {
                right = second.calculateTreeWalk(node, height - 1, leftMain);
            }
        }
        else {
            if (main === null) {
                node.parent = this;
                if (leftMain) {
                    this.leftChild = node;
                }
                else {
                    this.rightChild = node;
                }
                left = leftMain;
                right = !leftMain;
            }
            else if (second === null) {
                node.parent = this;
                if (!leftMain) {
                    this.leftChild = node;
                }
                else {
                    this.rightChild = node;
                }
                left = leftMain;
                right = !leftMain;
            }
        }
        if (left) {
            this.correctLeft();
        }
        else if (right) {
            this.correctRight();
        }
        return left || right;
    };
    Node.prototype.correctLeft = function () {
        if (this.leftChild.key > this.key) {
            var working = this.leftChild;
            var workingLeft = working.leftChild;
            working.parent = this.parent;
            working.leftChild = this;
            if (this.parent.leftChild === this) {
                this.parent.leftChild = working;
            }
            else {
                this.parent.rightChild = working;
            }
            this.parent = working;
            this.leftChild = workingLeft;
            if (workingLeft !== null) {
                workingLeft.parent = this;
            }
        }
    };
    Node.prototype.getJson = function () {
        var resultLeft = {};
        if (this.leftChild !== null) {
            resultLeft[this.leftChild.getSign() + "l"] = this.leftChild.getJson();
        }
        var resultRight = {};
        if (this.rightChild !== null) {
            resultRight[this.rightChild.getSign() + "r"] = this.rightChild.getJson();
        }
        return this.jsonConcat(resultRight, resultLeft);
    };
    Node.prototype.jsonConcat = function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
        return o1;
    };
    Node.prototype.correctRight = function () {
        if (this.rightChild.key > this.key) {
            var working = this.rightChild;
            var workingright = working.rightChild;
            working.parent = this.parent;
            working.rightChild = this;
            if (this.parent.leftChild === this) {
                this.parent.leftChild = working;
            }
            else {
                this.parent.rightChild = working;
            }
            this.parent = working;
            this.rightChild = workingright;
            if (workingright !== null) {
                workingright.parent = this;
            }
        }
    };
    Node.prototype.addLeft = function (node) {
        this.calculateWalk(node, true);
    };
    Node.prototype.calculateWalk = function (node, mainLeft) {
        var height = 0;
        while (true) {
            if (this.calculateTreeWalk(node, height, mainLeft)) {
                break;
            }
            height++;
        }
    };
    Node.prototype.addRight = function (node) {
        //debugger;
        this.calculateWalk(node, false);
    };
    Node.prototype.postCreate = function () {
        if (this.rightChild !== null) {
            this.rightChild.postCreate();
        }
        if (this.leftChild !== null) {
            this.leftChild.postCreate();
        }
    };
    Node.prototype.cloneInto = function (source) {
        this.leftChild = source.leftChild;
        if (this.leftChild !== null) {
            this.leftChild.parent = this;
        }
        this.rightChild = source.rightChild;
        if (this.rightChild !== null) {
            this.rightChild.parent = this;
        }
        this.parent = source.parent;
    };
    Node.prototype.simplify = function () {
        if (this.rightChild !== null) {
            this.rightChild.simplify();
        }
        if (this.leftChild !== null) {
            this.leftChild.simplify();
        }
    };
    Node.prototype.handleSimplifyWithOperation = function (operation) {
        if (this.leftChild instanceof equationLogic_3.ConstantNode && this.rightChild instanceof equationLogic_3.ConstantNode) {
            var newChild = equationLogic_1.NodeFactory.createNode(operation(this.leftChild.getValue(), this.rightChild.getValue()).toString());
            this.getParent().replaceChild(this, newChild);
            return;
        }
        if (this.leftChild instanceof equationLogic_2.VariableNode && this.rightChild instanceof equationLogic_2.VariableNode) {
            if (this.leftChild.getName() === this.rightChild.getName()) {
                this.leftChild.setValue(operation(this.leftChild.getValue(), this.rightChild.getValue()));
                this.getParent().replaceChild(this, this.leftChild);
            }
            return;
        }
    };
    Node.prototype.replaceChild = function (child, to) {
        to.parent = this;
        if (child === this.rightChild) {
            this.rightChild = to;
        }
        if (child === this.leftChild) {
            this.leftChild = to;
        }
    };
    Node.prototype.toString = function () {
        return "(" + (this.leftChild !== null ? this.leftChild.toString() : "") + this.getSign() + (this.rightChild !== null ? this.rightChild.toString() : "") + ")";
    };
    return Node;
}());
exports.Node = Node;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var equationLogic_2 = __webpack_require__(0);
var equationLogic_3 = __webpack_require__(0);
var equationLogic_4 = __webpack_require__(0);
var equationLogic_5 = __webpack_require__(0);
var equationLogic_6 = __webpack_require__(0);
var NodeFactory = /** @class */ (function () {
    function NodeFactory() {
    }
    NodeFactory.createNode = function (sign) {
        if (!isNaN(parseFloat(sign)) && isFinite(parseFloat(sign))) {
            return new equationLogic_3.ConstantNode(parseFloat(sign));
        }
        switch (sign) {
            case "+":
                return new equationLogic_1.AddNode();
            case '-':
                return new equationLogic_5.MinNode();
            case '*':
                return new equationLogic_2.MultiplyNode();
            case '/':
                return new equationLogic_6.DivideNode();
            default:
                return new equationLogic_4.VariableNode(sign);
        }
    };
    return NodeFactory;
}());
exports.NodeFactory = NodeFactory;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var ParentNode = /** @class */ (function (_super) {
    __extends(ParentNode, _super);
    function ParentNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParentNode.prototype.getSign = function () {
        return "P";
    };
    ParentNode.prototype.directionIsLeft = function () {
        return undefined;
    };
    ParentNode.prototype.addLeft = function (node) {
        node.parent = this;
        if (this.leftChild === null) {
            this.leftChild = node;
            return;
        }
        this.leftChild.addLeft(node);
        this.leftChild = this.leftChild.getTop();
    };
    ParentNode.prototype.addRight = function (node) {
        node.parent = this;
        if (this.leftChild === null) {
            this.leftChild = node;
            return;
        }
        this.leftChild.addRight(node);
        this.leftChild = this.leftChild.getTop();
    };
    ParentNode.prototype.toString = function () {
        return this.leftChild === null ? "" : this.leftChild.toString();
    };
    return ParentNode;
}(equationLogic_1.Node));
exports.ParentNode = ParentNode;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var equationLogic_1 = __webpack_require__(0);
var VariableNode = /** @class */ (function (_super) {
    __extends(VariableNode, _super);
    function VariableNode(name) {
        var _this = _super.call(this) || this;
        _this.key = 1;
        _this.name = null;
        _this.value = 1;
        _this.name = name;
        return _this;
    }
    VariableNode.prototype.directionIsLeft = function () {
        return undefined;
    };
    VariableNode.prototype.getName = function () {
        return this.name;
    };
    VariableNode.prototype.getValue = function () {
        return this.value;
    };
    VariableNode.prototype.setValue = function (value) {
        this.value = value;
    };
    VariableNode.prototype.getJson = function () {
        return {};
    };
    VariableNode.prototype.getSign = function () {
        return this.value + this.name;
    };
    return VariableNode;
}(equationLogic_1.Node));
exports.VariableNode = VariableNode;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function() {
exports.__esModule = true;
var InputParser_1 = __webpack_require__(1);
var InputParser = InputParser_1.EquationSolver.InputParser;

    var parser = new InputParser();
    parser.parseInput(process.argv[2]);
    console.log({
        "input": process.argv[2],
        "results": [parser.toString()]
    });


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);

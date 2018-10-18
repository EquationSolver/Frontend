"use strict";
exports.__esModule = true;
var equationLogic_1 = require("../equationLogic");
var equationLogic_2 = require("../equationLogic");
var equationLogic_3 = require("../equationLogic");
var equationLogic_4 = require("../equationLogic");
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

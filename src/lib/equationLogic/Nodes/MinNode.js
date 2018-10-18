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
var equationLogic_1 = require("../equationLogic");
var equationLogic_2 = require("../equationLogic");
var equationLogic_3 = require("../equationLogic");
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

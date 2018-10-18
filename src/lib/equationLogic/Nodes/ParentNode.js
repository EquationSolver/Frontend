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

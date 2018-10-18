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

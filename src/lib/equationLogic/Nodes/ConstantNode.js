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

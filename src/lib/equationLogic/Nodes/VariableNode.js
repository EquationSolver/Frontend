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

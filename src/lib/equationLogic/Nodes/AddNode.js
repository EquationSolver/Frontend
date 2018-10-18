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

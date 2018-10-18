"use strict";
exports.__esModule = true;
var equationLogic_1 = require("../equationLogic");
var equationLogic_2 = require("../equationLogic");
var equationLogic_3 = require("../equationLogic");
var equationLogic_4 = require("../equationLogic");
var equationLogic_5 = require("../equationLogic");
var equationLogic_6 = require("../equationLogic");
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

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
var equationLogic_4 = require("../equationLogic");
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

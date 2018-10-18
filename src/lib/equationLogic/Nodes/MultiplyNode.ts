import {Node} from '../equationLogic';
import {ConstantNode} from '../equationLogic';
import {NodeFactory} from '../equationLogic';
import {VariableNode} from '../equationLogic';

export class MultiplyNode extends Node{

  simplify(): void {
    super.simplify();

    if(this.leftChild instanceof ConstantNode && this.rightChild instanceof ConstantNode){
      const newChild : Node = NodeFactory.createNode( "" + (this.leftChild.getValue() * this.rightChild.getValue()));
      this.getParent().replaceChild(this, newChild);
      return;
    }

    if(this.checkIfMultiplyWithConstant()){
      return;
    }

    if(this.leftChild instanceof VariableNode && this.rightChild instanceof VariableNode){
      if(this.leftChild.getName() === this.rightChild.getName()){
        this.leftChild.setValue(this.leftChild.getValue() * this.rightChild.getValue());
        this.getParent().replaceChild(this, this.leftChild);
      }
    }
  }

  private checkIfMultiplyWithConstant() : boolean{
    if(this.leftChild instanceof ConstantNode && this.rightChild instanceof VariableNode){
      this.rightChild.setValue(this.rightChild.getValue() * this.leftChild.getValue());
      this.getParent().replaceChild(this, this.rightChild);
      return true;
    }

    if(this.leftChild instanceof VariableNode && this.rightChild instanceof ConstantNode){
      this.leftChild.setValue(this.leftChild.getValue() * this.rightChild.getValue());
      this.getParent().replaceChild(this, this.leftChild);
      return true;
    }
    return false;
  }
  public postCreate(): void {
    this.checkIfMultiplyWithConstant();
  }



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


  directionIsLeft(): boolean {
    return false;
  }
  getSign(): string {
    return "*";
  }
  key: number = 2;
}


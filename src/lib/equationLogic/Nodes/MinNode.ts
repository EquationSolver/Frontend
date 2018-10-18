import {Node} from '../equationLogic';
import {AddNode} from '../equationLogic';
import {NodeFactory} from '../equationLogic';

export class MinNode extends Node{
  key: number = 3;
  directionIsLeft(): boolean {
    return true;
  }

  public postCreate(): void {
    super.postCreate();
    if(this.rightChild instanceof MinNode){
      let node : Node = NodeFactory.createNode("+");
      node.cloneInto(this.rightChild);
      this.rightChild = node;
      node.parent = this;
    } else if(this.rightChild instanceof  AddNode){
      let node : Node = NodeFactory.createNode("-");
      node.cloneInto(this.rightChild);
      this.rightChild = node;
      node.parent = this;
    }
  }
  simplify(): void {
    super.simplify();
    super.handleSimplifyWithOperation(MinNode.createMinNode);
  }
  private static createMinNode(first : number, second : number) : number{
    return first - second;
  }
  getSign(): string {
    return "-";
  }
}


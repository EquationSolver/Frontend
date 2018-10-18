import {Node} from '../equationLogic';


export class ParentNode extends Node{
  getSign(): string {
    return "P";
  }
  key: 1000;
  directionIsLeft(): boolean {
    return undefined;
  }

  public addLeft(node : Node){
    node.parent = this;
    if(this.leftChild === null){
      this.leftChild = node;
      return;
    }
    this.leftChild.addLeft(node);
    this.leftChild = this.leftChild.getTop();
  }

  public addRight(node : Node) : void{
    node.parent = this;
    if(this.leftChild === null){
      this.leftChild = node;
      return;
    }
    this.leftChild.addRight(node);
    this.leftChild = this.leftChild.getTop();
  }

  public toString() : String{
    return this.leftChild === null ? "" : this.leftChild.toString()
  }



}


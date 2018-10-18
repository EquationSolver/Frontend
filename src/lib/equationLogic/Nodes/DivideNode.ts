import {Node} from '../equationLogic';

export class DivideNode extends Node{
  simplify(): void {
    super.simplify();
    super.handleSimplifyWithOperation(DivideNode.createDivideNode);
  }
  private static createDivideNode(first : number, second : number) : number{
    return first / second;
  }
  directionIsLeft(): boolean {
    return false;
  }
  key: number = 2;

  public postCreate(): void {
    const right = this.rightChild;
    this.rightChild = this.leftChild;
    this.leftChild = right;
    super.postCreate();
  }
  getSign(): string {
    return "/";
  }
}



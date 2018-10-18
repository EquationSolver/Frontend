import {Node} from '../equationLogic';

export class AddNode extends Node{
  getSign(): string {
    return "+";
  }
  simplify(): void {
    super.simplify();
    super.handleSimplifyWithOperation(AddNode.createAddNode);
  }
  private static createAddNode(first : number, second : number) : number{
    return first + second;
  }

  key: number = 3;
  directionIsLeft(): boolean {
    return true;
  }
}


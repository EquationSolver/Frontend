import {Node} from '../equationLogic';

export class ConstantNode extends Node{
  directionIsLeft(): boolean {
    return undefined;
  }
  key: number = 1;
  private value : number;
  public constructor(value : number) {
    super();
    this.value = value;
  }

  public getValue() : number{
    return this.value;
  }
  public getJson() : any{
    return this.value;
  }
  getSign(): string {
    return this.value.toString();
  }
  }


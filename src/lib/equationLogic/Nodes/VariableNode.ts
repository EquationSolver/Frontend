import {Node} from '../equationLogic';

export class VariableNode extends Node{

  directionIsLeft(): boolean {
    return undefined;
  }

  key: number = 1;

  private name : string = null;
  private value : number = 1;

  public constructor(name : string) {
    super();
    this.name = name;
  }

  public getName() : string{
    return this.name;
  }
  public getValue() : number{
    return this.value;
  }
  public setValue(value : number){
    this.value = value;
  }
  public getJson() : any{
    return {};
  }
  getSign(): string {
    return this.value + this.name;
  }
}


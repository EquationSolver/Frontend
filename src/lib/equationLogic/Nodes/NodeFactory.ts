import {AddNode} from '../equationLogic';
import {Node} from '../equationLogic';
import {MultiplyNode} from '../equationLogic';
import {ConstantNode} from '../equationLogic';
import {VariableNode} from '../equationLogic';
import {MinNode} from '../equationLogic';
import {DivideNode} from '../equationLogic';

export class NodeFactory {
  public static createNode(sign : string) : Node{
    if(!isNaN(parseFloat(sign)) && isFinite(parseFloat(sign))){
      return new ConstantNode(parseFloat(sign));
    }
    switch(sign){
      case "+":
        return new AddNode();
      case '-':
        return new MinNode();
      case '*':
        return new MultiplyNode();
      case '/':
        return new DivideNode();
      default:
        return new VariableNode(sign);
    }
  }
}

import {ParentNode} from './equationLogic';
import {NodeFactory} from './equationLogic';
import {Node} from './equationLogic';
export module EquationSolver {
  export class InputParser {

    private input: string = "";
    private top: Node;

    public toString() : String{
      return this.top.toString();
    }

    public parseInput(input: string) {
      //console.log(input);
      this.input = input;
      this.input = this.input.replace(" ", "");
      this.fixInput();
      this.top = new ParentNode();
      let directionIsleft = this.top.directionIsLeft() || true;
      for(let i = 0; i < this.input.length; i++){
        const node = NodeFactory.createNode(this.input[i]);
        directionIsleft = node.directionIsLeft() === undefined ? directionIsleft : node.directionIsLeft();
        if(directionIsleft){
          this.top.addLeft(node);
        } else {
          debugger;
          this.top.addRight(node);
        }
      }
      this.top.postCreate();
      this.top.simplify();

    }

    private fixInput() {
      let regexes = [
        new RegExp(/([0-9]+|[A-z])\(/gm), //a( -> a*( , 09 -> 09*(
        new RegExp(/\)([0-9]+|[A-z])/gm),
        new RegExp(/([0-9]+|[A-z])[A-z]/gm),
        new RegExp(/([A-z])[0-9]+/gm)
      ];
      this.input = this.input.replace(")(", ")*(");
      regexes.forEach( regex => {
        let m;
        while (( m = regex.exec(this.input)) !== null) {

          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          m.forEach((match, groupIndex) => {
            const index = m.index + match.length;
            if(groupIndex > 0) {
              this.input = (this.input.substring(0, index) + ("*" + this.input.substring(index)));
            }
          });
        }
      });
    }
  }
}

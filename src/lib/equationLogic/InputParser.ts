export module EquationSolver {
  export class InputParser {

    private input: string = "";

    private equation: Node;

    private top: Node;

    private numbers = new RegExp("[0-9]");

    private letters = new RegExp("[A-z]");

    public parseInput(input: string) {
      this.input = input;
      this.input = this.input.replace(" ", "");
      this.fixInput();
      console.log(this.input);
      /*
      if ((this.input[0] == '(')) {
        let p: InputParser = new InputParser();
        this.top = new ParenthesesNode();
        this.top.AddChild(p.parseInput(this.input.Substring(1)));
        this.input = p.input;
      }
      else {
        this.top = new ConstantNode(this.input[0].ToString());
      }

      this.input = this.input.Substring(1);
      this.parseStringPartNode(this.top, this.top);
      return this.equation;
      */
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
        //debugger;
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

    /*
    private parseStringPartNode(child: Node, parent: Node) {
      let current: Node = null;
      if ((this.input.Length == 0)) {
        return;
      }

      try {
        switch (this.input[0]) {
          case '+':
            current = new PlusNode();
            current.AddChild(this.top);
            this.input = this.input.Substring(1);
            this.top = current;
            this.parseStringPartNode(child, current);
            break;
          case '-':
            current = new MinNode();
            current.AddChild(this.top);
            this.input = this.input.Substring(1);
            this.top = current;
            this.parseStringPartNode(child, current);
            break;
          case '*':
            current = new MultiplicationNode();
            current.AddChild(child);
            this.input = this.input.Substring(1);
            parent.OverrideChild(child, current);
            if ((this.top instanceof  ConstantNode)) {
              this.top = current;
            }

            this.parseStringPartNode(child, current);
            break;
          case '/':
            current = new DivisionNode();
            current.AddChild(child);
            this.input = this.input.Substring(1);
            parent.OverrideChild(child, current);
            if ((this.top instanceof  ConstantNode)) {
              this.top = current;
            }

            this.parseStringPartNode(child, current);
            break;
          case '=':
            current = new EqualsNode();
            current.AddChild(this.top);
            this.input = this.input.Substring(1);
            this.equation = current;
            this.parseStringPartNode(child, current);
            break;
          case '(':
            current = new ParenthesesNode();
            let p: InputParser = new InputParser();
            current.AddChild(p.parseInput(this.input.Substring(1)));
            this.input = p.input;
            parent.AddChild(current);
            this.parseStringPartNode(current, parent);
            break;
          case ')':
            this.input = this.input.Substring(1);
            this.equation = this.top;
            break;
          default:
            if (this.letters.IsMatch(this.input[0].ToString())) {
              current = new VariableNode(this.input[0]);
              parent.AddChild(current);
              this.input = this.input.Substring(1);
              this.parseStringPartNode(current, parent);
              break;
            }

            if (this.numbers.IsMatch(this.input[0].ToString())) {
              let value: string = ("" + this.input[0]);
              this.input = this.input.Substring(1);
              while ((!String.IsNullOrWhiteSpace(this.input)
                && this.numbers.IsMatch(this.input[0].ToString()))) {
                value = (value + this.input[0]);
                this.input = this.input.Substring(1);
              }

              current = new ConstantNode(value);
              parent.AddChild(current);
              this.parseStringPartNode(current, parent);
              break;
            }

            throw new NotImplementedException("INVALID INPUT");
            break;
        }

      }
      finally {

      }

    }
    */
  }
}

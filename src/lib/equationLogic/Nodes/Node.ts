import {NodeFactory} from '../equationLogic';
import {VariableNode} from '../equationLogic';
import {ConstantNode} from '../equationLogic';
import {ParentNode} from '../equationLogic';

export abstract class Node {

    /**
     * The children of the node, because node is a binary three. The maximum of children is 2.
     */
    protected leftChild: Node = null;
    protected rightChild: Node = null;
    public parent: Node = null;
    protected abstract key : number;
    protected height: number;


    public getParent() : Node{
      return this.parent;
    }

    public getTop() : Node{
      let parent : Node = this;
      while(!(parent.getParent() instanceof ParentNode)){
        parent = parent.getParent();
      }
      return parent;
    }

    private calculateTreeWalk(node : Node, height : number, leftMain :boolean = true) : boolean{
      let main = leftMain ? this.leftChild : this.rightChild;
      let second = !leftMain ? this.leftChild : this.rightChild;

      let right = false;
      let left = false;
      if(height > 0){
        left = main.calculateTreeWalk(node, height-1, leftMain);
        if(!left) {
          right = second.calculateTreeWalk(node, height - 1, leftMain);
        }
      } else {
        if (main === null) {
          node.parent = this;
          if(leftMain){
            this.leftChild = node;

          } else {
            this.rightChild = node;
          }
          left = leftMain;
          right = !leftMain;
        }
        else if (second === null) {
          node.parent = this;
          if(!leftMain){
            this.leftChild = node;
          } else {
            this.rightChild = node;
          }
          left = leftMain;
          right = !leftMain;
        }
      }

      if(left){
        this.correctLeft();
      } else if(right){
        this.correctRight();
      }
      return left || right;
    }

    private correctLeft() : void{
      if(this.leftChild.key > this.key) {

        let working = this.leftChild;
        const workingLeft = working.leftChild;

        working.parent = this.parent;
        working.leftChild = this;

        if (this.parent.leftChild === this) {
          this.parent.leftChild = working;
        } else {
          this.parent.rightChild = working;
        }

        this.parent = working;
        this.leftChild = workingLeft;
        if(workingLeft !== null) {
          workingLeft.parent = this;
        }
      }
    }

    public getJson() : any{
      let resultLeft = {};
      if(this.leftChild !== null){
        resultLeft[this.leftChild.getSign() + "l"] = this.leftChild.getJson();
      }

      let resultRight = {};
      if(this.rightChild !== null){
        resultRight[this.rightChild.getSign()  + "r"] = this.rightChild.getJson();
      }

      return this.jsonConcat(resultRight, resultLeft);
    }
  private jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
    public abstract  getSign() : string;
    private correctRight() : void{
      if(this.rightChild.key > this.key) {
        let working = this.rightChild;
        const workingright = working.rightChild;

        working.parent = this.parent;
        working.rightChild = this;

        if (this.parent.leftChild === this) {
          this.parent.leftChild = working;
        } else {
          this.parent.rightChild = working;
        }

        this.parent = working;
        this.rightChild = workingright;
        if(workingright !== null) {
          workingright.parent = this;
        }
      }
    }

    public addLeft(node : Node){
      this.calculateWalk(node, true);
    }

    private calculateWalk(node : Node, mainLeft: boolean){
      let height = 0;
      while (true){
        if(this.calculateTreeWalk(node,height,mainLeft)){
          break;
        }
        height++;
      }
    }

    public addRight(node : Node) : void{
      //debugger;
      this.calculateWalk(node, false);
    }

    public abstract directionIsLeft() : boolean;


    public postCreate() : void{
      if(this.rightChild !== null) {
        this.rightChild.postCreate();
      }
      if(this.leftChild !== null) {
        this.leftChild.postCreate();
      }
    }

    public cloneInto(source : Node) : void{
      this.leftChild = source.leftChild;
      if(this.leftChild !== null){
        this.leftChild.parent = this;
      }
      this.rightChild = source.rightChild;
      if(this.rightChild !== null){
        this.rightChild.parent = this;
      }
      this.parent = source.parent;
    }

    public simplify() : void{
      if(this.rightChild !== null) {
        this.rightChild.simplify();
      }
      if(this.leftChild !== null) {
        this.leftChild.simplify();
      }
    }

    protected handleSimplifyWithOperation(operation : (first : number, second : number) => number){
      if(this.leftChild instanceof ConstantNode && this.rightChild instanceof ConstantNode){
        const newChild : Node = NodeFactory.createNode( operation(this.leftChild.getValue() , this.rightChild.getValue()).toString());
        this.getParent().replaceChild(this, newChild);
        return;
      }
      if(this.leftChild instanceof VariableNode && this.rightChild instanceof VariableNode){
        if(this.leftChild.getName() === this.rightChild.getName()){
          this.leftChild.setValue(operation(this.leftChild.getValue() , this.rightChild.getValue()));
          this.getParent().replaceChild(this, this.leftChild);
        }
        return;
      }
    }

    public replaceChild(child : Node, to : Node){
      to.parent = this;
      if(child === this.rightChild){
        this.rightChild = to;
      }
      if(child === this.leftChild){
        this.leftChild = to;
      }
    }

    public toString() : String{
      return "(" + (this.leftChild !== null ? this.leftChild.toString() : "") + this.getSign() + (this.rightChild !== null ? this.rightChild.toString() : "") + ")";
    }
  }

import {Component, OnInit, ViewChild} from '@angular/core';
import {EquationSolver} from '../../../lib/equationLogic/InputParser';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public input : any = "";
  public result : String = "";

  @ViewChild('inputApp') inputComponent : InputComponent;
  constructor() { }
  public submitNewQuery(data) : void{
    let test = new EquationSolver.InputParser();
    test.parseInput(data);
    this.result = test.toString();
    this.input = data;
    this.inputComponent.unLoading();
  }

  ngOnInit() {
  }

}

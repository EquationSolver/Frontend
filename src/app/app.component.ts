import {Component, OnInit} from '@angular/core';
import {EquationSolver} from "../lib/equationLogic/InputParser"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    let test = new EquationSolver.InputParser();
    test.parseInput("aaaa90*90a/(b+c*a/4c)")
  }


  title = 'app';



}

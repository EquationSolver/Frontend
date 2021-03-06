import {Component, OnInit, ViewChild} from '@angular/core';
import {EquationSolver} from '../../../lib/equationLogic/InputParser';
import {InputComponent} from './input/input.component';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public input : any = "";
  public result : String = "";

  @ViewChild('inputApp') inputComponent : InputComponent;
  constructor(private http : HttpClient, private route: ActivatedRoute) { }
  public submitNewQuery(data) : void{
    this.input = data;
    if(this.route.snapshot.queryParamMap.get('backend') === null) {
      let test = new EquationSolver.InputParser();
      test.parseInput(data);
      this.result = test.toString();
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      var equation = JSON.stringify({equation: this.input});
      this.http.post('http://localhost:8090/equation/submit', equation, httpOptions).subscribe(
        (val) => {
          //POST call successful value returned in body
          this.result = val.toString();
        },
        response => {
          //POST call in error
        },
        () => {
          //The POST observable is now completed
        });
    }
    this.inputComponent.unLoading();
  }

  ngOnInit() {
  }

}

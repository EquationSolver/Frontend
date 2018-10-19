import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public error: boolean;
  @Input() public valueTS: string;
  @Input() public value: string;
  public loading: boolean;
  public recommendations: String[] = [];

  @Output() calculationQuery = new EventEmitter<string>();

  constructor(private http : HttpClient) {
    this.error = false;
    this.recommendations.push("1-2");
    this.recommendations.push("1-2");
    this.recommendations.push("1-2");
    this.recommendations.push("1-2");
    this.recommendations.push("1-2");
  }

  ngOnInit() {
    this.unLoading();
  }

  public unLoading(){
    this.loading = false;
  }

  public change(): void{
    this.http.get<equations[]>('http://localhost:8090/equation/recommended?entry='+this.valueTS+'', { responseType: 'json' }).subscribe(
      (val) => {
        //POST call successful value returned in body
        this.recommendations.length = 0;
        val.forEach(object =>
        this.recommendations.push(object.equation));
      },
      response => {
        //POST call in error
      },
      () => {
        //The POST observable is now completed
      });
  }

  public submit(): void{
    this.error = !this.testValue();
    this.recommendations = [];
    if(!this.error) {
      this.loading = true;
      this.calculationQuery.emit(this.valueTS);
    }
  }

  public itemClicked(input : string) : void{
    this.valueTS = input;
    this.submit();
  }

  public clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
  }

  private testValue() : boolean{
    const regex = /^[0-9A-z]+([\*\\\+-][0-9A-z]+)+$/;

    return  regex.exec(this.valueTS) !== null;
  }
  @HostListener('document:click', ['$event'])
  public clickedOutside($event){
    // here you can hide your menu
    console.log("CLICKED OUTSIDE");
    this.recommendations = [];
  }
}

interface equations {
  equation: string
}

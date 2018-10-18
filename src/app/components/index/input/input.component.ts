import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public error: boolean;
  @Input() public valueTS: string;
  public loading: boolean;
  public recommendations: String[] = [];

  @Output() calculationQuery = new EventEmitter<string>();

  constructor() {
    this.error = false;
  }

  public inputChanged() : void{
    console.log("YES");
    this.recommendations.push(this.valueTS);
  }
  ngOnInit() {
    this.unLoading();
  }

  public unLoading(){
    this.loading = false;
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

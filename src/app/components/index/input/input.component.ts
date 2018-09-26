import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public valueTS: string;
  public loading: boolean;
  constructor() { }

  ngOnInit() {
    this.valueTS = '';
    this.loading = false;
  }

  public submit(): void{
    this.loading = true;
  }

}

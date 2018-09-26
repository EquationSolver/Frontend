import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public name = '(3x + 5 - (3+2)) / 3 + 10 * ( 3-2)';
  constructor() { }

  ngOnInit() {
  }
  public onClick(): void {

  }

}

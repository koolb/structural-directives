import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> {{ info | lowercase }} </h2>
  <h2> {{ info | uppercase }} </h2>
  <h2> {{ info | titlecase }} </h2>
  <h2> {{ 5.678 | number:'0.2-3' }} </h2>
  <h2> {{ 5.678 | number:'2.2-3' }} </h2>
  <h2> {{ 5.678 | number:'3.3-4' }} </h2>
  <h2> {{ 5.678 | number:'3.4-5' }} </h2>
  <h2> {{ 5.678 | number:'3.1-2' }} </h2>
  <h2> {{ .25 | percent }} </h2>
  <h2> {{ .25 | currency }} </h2>
  <h2> {{ .25 | currency: "GBP" }} </h2>
  <h2> {{ .25 | currency: "DMK" }} </h2>
  <h2> {{ .25 | currency: "EUR" }} </h2>
  <h2> {{ date | date }} </h2>
  <h2> {{ date | date: 'shortDate' }} </h2>
  <h2> {{ date | date: 'mediumDate' }} </h2>
  <h2> {{ date | date: 'longDate' }} </h2>

  <h2> {{ "Hello " + name | lowercase}} </h2>
  <input #myInput type="text">
  <button (click)="fireEvent(myInput.value)">Send Event </button> 
  <h2 *ngIf="displayName; then thenBlock; else elseBlock"> 
    Test Component
  </h2>
  <ng-template #thenBlock>
  <h2> Test Component </h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2> Name is not displayed </h2>
  </ng-template>
  <div [ngSwitch]="color"> 
    <div *ngSwitchCase="'red'"> You picked {{color}} </div>
    <div *ngSwitchCase="'blue'"> You picked {{color}} </div>
    <div *ngSwitchCase="'green'"> You picked {{color}} </div>
    <div *ngSwitchDefault> Invalid color </div>
  </div>
  <div *ngFor="let color of colors; index as i; first as f; last as l">
    <h2>{{f}} {{i}}: {{color}} {{l}}</h2>
  </div>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  public info = "DaTa";
  public displayName = 1;
  public color = 'red';
  public colors = ['red', 'green', 'blue'];
  public date = new Date();
  constructor() { }
  fireEvent(val) {
    this.childEvent.emit("Hello " + val);
  }
  ngOnInit() {
  }

}

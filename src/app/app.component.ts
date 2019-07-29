import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    {{ msg }}
  </h1>
  <!-- <app-test (childEvent)="msg=$event" [parentData]="name"></app-test> -->
  <app-employee-list></app-employee-list>
  <app-employee-detail></app-employee-detail>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directives';
  public name = "Kool";
  public msg;
}

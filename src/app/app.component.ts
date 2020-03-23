import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name:string = 'wirry';

  constructor() {
    this.changeName('John');
  }

  changeName(name:string) {
      this.name = name;
  }

}

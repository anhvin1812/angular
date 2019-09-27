import { Menu } from './model/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  menu: Menu[];

  constructor(){
    this.menu = [
      {
        link: 'home',
        intl: 'home',
        label: 'Home'
      }
    ]
  }
}

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
        link: '',
        intl: 'home',
        label: 'Home'
      },
      {
        link: 'news',
        intl: 'News',
        label: 'News'
      },
      {
        link: 'oops',
        intl: 'oops',
        label: 'Notfound'
      }
    ]
  }
}

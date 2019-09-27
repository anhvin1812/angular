import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';

@Component({
    selector: 'side-bar',
    templateUrl: 'side-bar.component.html',
    styleUrls: ['side-bar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Input() menu: Menu[];
    ngOnInit() {
        console.log('sss');
    }
}
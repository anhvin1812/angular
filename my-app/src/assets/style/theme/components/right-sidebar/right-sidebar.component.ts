import { Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'base-right-sidebar-layout',
  styleUrls: ['./right-sidebar.component.scss'],
  template: `
    <ng-content></ng-content>`,
})
export class RightSidebarLayoutComponent {
  @Input() public title;

  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') private readonly mdlGridNoSpacing = true;
}

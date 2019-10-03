import { Component, HostBinding } from '@angular/core';

@Component({
  template: '',
})
export class BlankLayoutCardComponent  {
  @HostBinding('class.blank-layout-card') protected readonly blankLayoutCard = true;
}

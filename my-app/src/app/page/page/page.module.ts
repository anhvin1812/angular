import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { URL_NOT_FOUND } from 'src/app/app.constants';
import { BlankLayoutComponent } from 'src/app/component/blank-layout/blank-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const pageRoutes: Routes = [
  { 
    path: '', 
    component: BlankLayoutComponent, 
    children:[
      {
        path: URL_NOT_FOUND,
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  declarations:[
    BlankLayoutComponent,
    NotFoundComponent
  ],
  imports:[
    RouterModule.forChild(pageRoutes)
  ]
})
export class PageModule {
}
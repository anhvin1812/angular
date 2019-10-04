import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { URL_NOT_FOUND } from 'src/app/app.constants';
import { BlankLayoutComponent } from 'src/app/component/blank-layout/blank-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from 'src/assets/style/theme/theme.module';

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
    ThemeModule,
    RouterModule.forChild(pageRoutes)
  ]
})
export class PageModule {
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { URL_NOT_FOUND } from 'src/app/app.constants';
import { BlankLayoutComponent } from 'src/app/component/blank-layout/blank-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from 'src/assets/style/theme/theme.module';
import { BlankLayoutCardComponent } from 'src/app/component/blank-layout-card/blank-layout-card.component';

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
    BlankLayoutCardComponent,
    NotFoundComponent
  ],
  imports:[
    ThemeModule,
    RouterModule.forChild(pageRoutes)
  ]
})
export class PageModule {
}
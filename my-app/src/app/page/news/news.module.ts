import { Component, enableProdMode, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { newsRoutes } from './news.route';
import { NewsComponent } from './news.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports:[
    RouterModule.forChild(newsRoutes)
  ]
})
export class NewsModule {
} 

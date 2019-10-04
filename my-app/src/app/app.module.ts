import { CommonLayoutComponent } from 'src/app/component/common-layout/common-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NewsModule } from './page/news/news.module';
import { ThemeModule } from 'src/assets/style/theme';
import { SidebarComponent } from './component/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonLayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NewsModule,
    ThemeModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

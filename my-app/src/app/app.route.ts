import { URL_NOT_FOUND, URL_PAGES } from './app.constants';
import { HomeComponent } from './page/home/home.component';
import { Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: URL_PAGES,
    loadChildren: ()=> import('./page/page/page.module').then(m => m.PageModule),
  },
  {
    path: '**',
    redirectTo: `${URL_PAGES}/${URL_NOT_FOUND}` 
  }
];
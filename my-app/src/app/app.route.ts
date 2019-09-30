import { HomeComponent } from './page/home/home.component';
import { Routes} from '@angular/router';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
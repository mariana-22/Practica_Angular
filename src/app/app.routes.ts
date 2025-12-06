import { Routes } from '@angular/router';
import { PadreComponent } from './padre/padre/padre';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PadreComponent },
  { path: 'home/:opcion', component: PadreComponent },
  { path: 'buscar', component: PadreComponent },
  { path: 'buscar/:opcion', component: PadreComponent },
  { path: 'html', component: PadreComponent },
  { path: 'html/:opcion', component: PadreComponent },
  { path: 'css', component: PadreComponent },
  { path: 'css/:opcion', component: PadreComponent },
  { path: '**', redirectTo: 'home' }
];

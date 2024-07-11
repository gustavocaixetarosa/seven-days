import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { NavesComponent } from './naves/naves.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'filmes', component: FilmesComponent},
    {path: 'naves', component: NavesComponent}
];

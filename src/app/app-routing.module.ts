import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'animes', pathMatch: 'full' },
  { path: 'animes', component: AnimeListComponent },
  { path: 'animes/:id', component: AnimeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeDetailComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: AnimeListComponent }, 
      { path: 'anime/:id', component: AnimeDetailComponent },  
    ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

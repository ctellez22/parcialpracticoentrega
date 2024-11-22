import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Anime } from './anime';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}


  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }


  getAnime(id: number): Observable<Anime> {
    return this.http.get<Anime[]>(this.apiUrl).pipe(
      map((animes: Anime[]) => {
        
        const anime = animes.find(a => a.id === id);
        if (anime) {
          return anime;
        } else {
          throw new Error("NO ESTA");
        }
      })
    );
  }
}

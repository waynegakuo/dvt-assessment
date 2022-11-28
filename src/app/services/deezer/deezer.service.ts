import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist, SearchResponse} from "../../models/Artist/artist.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  deezerSearchArtistApi = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist';

  constructor(private http: HttpClient) {
  }

  getArtistSearchResult(searchPhrase: string): Observable<Artist[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchPhrase);

    return this.http.get<SearchResponse>(this.deezerSearchArtistApi, {params: queryParams})
      .pipe(
        map(data => {
          console.log('Check Data', data.data);
          return data.data;
        })
      )
  }


}

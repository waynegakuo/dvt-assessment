import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artist, SearchResponse} from "../../models/Artist/artist.model";
import {map} from "rxjs/operators";
import {Track, TrackResponse} from 'src/app/models/Track/track.model';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {


  deezerSearchArtistApi = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist';

  deezerArtistDetailsApi = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/';

  constructor(private http: HttpClient) {
  }

  getArtistSearchResult(searchPhrase: string): Observable<Artist[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchPhrase);

    return this.http.get<SearchResponse>(this.deezerSearchArtistApi, {params: queryParams})
      .pipe(
        map(data => {
          return data.data;
        })
      )
  }

  getArtistDetails(artistId: string): Observable<Artist> {
    return this.http.get<Artist>(this.deezerArtistDetailsApi + artistId)
      .pipe(
        map(artist => {
          return artist
        })
      )
  }

  getArtistTopTracks(artistId: string): Observable<Track[]> {
    return this.http.get<TrackResponse>
    (`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/top?limit=50`)
      .pipe(
        map(data => {
          return data.data;
        })
      )
  }

}

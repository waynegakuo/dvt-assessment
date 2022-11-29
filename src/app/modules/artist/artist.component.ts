import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DeezerService} from "../../services/deezer/deezer.service";
import {Observable, of} from "rxjs";
import {Artist} from "../../models/Artist/artist.model";
import {Track} from "../../models/Track/track.model";
import {catchError, ignoreElements} from "rxjs/operators";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})

export class ArtistComponent implements OnInit {

  artistId!: string | null;
  artistDetails$!: Observable<Artist>;
  artistTopTracks$!: Observable<Track[]>;
  artistDetailsError$!: Observable<{ message: string }>;

  constructor(private activeRoute: ActivatedRoute, private deezerService: DeezerService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.artistId = params.get('id');

      this.artistDetails$ = this.deezerService.getArtistDetails(<string>this.artistId);

      this.artistTopTracks$ = this.deezerService.getArtistTopTracks(<string>this.artistId);

      this.artistDetailsError$ = this.artistDetails$
        .pipe(
          ignoreElements(),
          catchError((err) => {
            return of(err);
          })
        )
    })
  }


}

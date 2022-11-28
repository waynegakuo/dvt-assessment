import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DeezerService} from "../../services/deezer/deezer.service";
import {Observable} from "rxjs";
import {Artist} from "../../models/Artist/artist.model";
import {Track} from "../../models/Track/track.model";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})

export class ArtistComponent implements OnInit {

  artistId!: string | null;
  artistDetails$!: Observable<Artist>;
  artistTopTracks$!: Observable<Track[]>;

  constructor(private activeRoute: ActivatedRoute, private deezerService: DeezerService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.artistId = params.get('id');

      console.log('Check id', this.artistId);

      this.artistDetails$ = this.deezerService.getArtistDetails(<string>this.artistId);

      this.artistTopTracks$ = this.deezerService.getArtistTopTracks(<string>this.artistId);
    })
  }


}

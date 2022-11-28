import {Component, inject, Input} from '@angular/core';
import {Artist} from "../../models/Artist/artist.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist-details-card',
  templateUrl: './artist-details-card.component.html',
  styleUrls: ['./artist-details-card.component.scss']
})
export class ArtistDetailsCardComponent {

  @Input() artistData!: Artist;

  constructor(private router: Router) {
  }


  onArtistCardClicked(artistId: number): void {
    this.router.navigate(['artist', artistId]);
  }
}

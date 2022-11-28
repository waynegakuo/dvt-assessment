import {Component, Input} from '@angular/core';
import {Artist} from "../../models/Artist/artist.model";

@Component({
  selector: 'app-artist-details-card',
  templateUrl: './artist-details-card.component.html',
  styleUrls: ['./artist-details-card.component.scss']
})
export class ArtistDetailsCardComponent {

  @Input() artistData!: Artist;

}

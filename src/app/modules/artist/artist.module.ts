import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtistRoutingModule} from './artist-routing.module';
import {ArtistComponent} from './artist.component';
import {SharedModule} from "../../shared/shared.module";
import {GhostArtistComponent} from "../../components/ghosts/ghost-artist/ghost-artist.component";

@NgModule({
  declarations: [
    ArtistComponent,
    GhostArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule
  ]
})
export class ArtistModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ArtistDetailsCardComponent } from './components/artist-details-card/artist-details-card.component';
import { GhostArtistDetailsCardComponent } from './components/ghosts/ghost-artist-details-card/ghost-artist-details-card.component';
import { NoResultsComponent } from './shared/components/no-results/no-results.component';
import { StartSearchComponent } from './shared/components/start-search/start-search.component';
import { ErrorComponent } from './shared/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    ArtistDetailsCardComponent,
    GhostArtistDetailsCardComponent,
    NoResultsComponent,
    StartSearchComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

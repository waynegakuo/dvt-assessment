import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DeezerService} from "../../services/deezer/deezer.service";
import {
  catchError,
  debounceTime,
  delay,
  distinctUntilChanged,
  ignoreElements,
  share,
  switchMap,
  take
} from "rxjs/operators";
import {FormBuilder} from "@angular/forms";
import {defer, merge, Observable, of} from "rxjs";
import {Artist} from "../../models/Artist/artist.model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  searchResults$!: Observable<Artist[]>;

  searchResultError$!: Observable<{ message: string }>;


  searchForm = this.fb.group(
    {
      searchText: ['']
    }
  )
  @ViewChild('searchInput', {static: true, read: ElementRef})
  private searchInputWord: any

  constructor(private deezerService: DeezerService, private fb: FormBuilder) {
  }

  ngOnInit() {

    const searchString$ = merge(
      defer(() => of(this.searchForm.controls.searchText.value)),
      this.searchForm.controls.searchText.valueChanges
    ).pipe(
      debounceTime(1000),
      distinctUntilChanged()
    );

    this.searchResults$ = searchString$.pipe(
      switchMap((searchString: any) =>
        this.deezerService.getArtistSearchResult(searchString)
      ),
      share()
    );

    this.searchResultError$ = this.searchResults$
      .pipe(
        ignoreElements(),
        catchError((err) => {
          return of(err);
        })
      )
  }


}

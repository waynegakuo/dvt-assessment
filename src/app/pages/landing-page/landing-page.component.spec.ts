import {ComponentFixture, fakeAsync, flush, inject, TestBed, tick} from '@angular/core/testing';
import {LandingPageComponent} from './landing-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormBuilder} from "@angular/forms";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {DeezerService} from "../../services/deezer/deezer.service";
import {of} from "rxjs";
import {ARTIST_DATA_STUB} from "../../services/deezer/deezer.data.stub";
import {By} from "@angular/platform-browser";
import {delay} from "rxjs/operators";

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let deezerService: DeezerService;
  let el: DebugElement;


  let mockDeezerService = {
    getArtistSearchResult: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FormBuilder,
        {
          provide: DeezerService,
          useValue: mockDeezerService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    deezerService = TestBed.inject(DeezerService);
    el = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([DeezerService], (injectService: DeezerService) => {
      const service = TestBed.inject(DeezerService);
      expect(injectService).toBe(service);
    })
  )

  it('Test a Form Group Element Count', () => {
    const inputElements = el.nativeElement.querySelectorAll('input');

    expect(inputElements.length).toEqual(1);
  })

  it('should allow us to set the search text', () => {

    setInputValue('.search-input', 'Bruno')

    fixture.whenStable().then(() => {
      const searchForm = component.searchForm.get('searchText');

      delay(1000);
      jest.spyOn(mockDeezerService, 'getArtistSearchResult').mockReturnValue(of(ARTIST_DATA_STUB));
      fixture.detectChanges();
      const artistCardSection = el.queryAll(By.css('.artist-section'))
      expect(artistCardSection.length).toBe(1);

      // @ts-ignore
      expect(searchInput.value).toEqual(searchForm?.value);
    })
      .catch(() => {
        console.log('Error');
      })
  })

  it('should render the card section if data is available on search', () => {
    setInputValue('.search-input', 'Tommy')

    fixture.whenStable().then(() => {
      jest.spyOn(mockDeezerService, 'getArtistSearchResult').mockReturnValue(of(ARTIST_DATA_STUB));
      fixture.detectChanges();

      const artistCardSection = el.queryAll(By.css('.artist-section'))
      expect(artistCardSection.length).toBe(1);
    })
      .catch(() => {
        console.log('Error');
      })
  })

  function setInputValue(cssSelector: string, value: string) {
    const searchInput: HTMLInputElement = el.query(By.css(cssSelector)).nativeElement;
    searchInput.value = value;
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }

});

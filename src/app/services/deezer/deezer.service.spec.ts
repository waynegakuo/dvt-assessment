import {TestBed} from '@angular/core/testing';

import {DeezerService} from './deezer.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ARTIST_DATA_STUB, ARTIST_DETAILS_DATA_STUB, TRACK_DATA_STUB} from "./deezer.data.stub";
import {of, throwError} from 'rxjs';

describe('DeezerService', () => {
  let service: DeezerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeezerService]
    });
    service = TestBed.inject(DeezerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all artists based on search', done => {
    jest.spyOn(service, 'getArtistSearchResult').mockReturnValue(of(ARTIST_DATA_STUB));
    service.getArtistSearchResult('John')
      .subscribe(artists => {
        expect(artists).toBeTruthy();
        expect(artists.length).toEqual(2);
        done();
      })
    expect(service.getArtistSearchResult).toHaveBeenCalledTimes(1);
  });

  it('should retrieve artist details based on artist ID', done => {
    jest.spyOn(service, 'getArtistDetails').mockReturnValue(of(ARTIST_DETAILS_DATA_STUB));
    service.getArtistDetails('1')
      .subscribe(artist => {
        expect(artist).toBeTruthy();
        expect(artist.id).toEqual(1);
        done();
      })
    expect(service.getArtistDetails).toHaveBeenCalledTimes(1);
  });


  it('should retrieve artist top tracks based on artist ID', done => {
    jest.spyOn(service, 'getArtistTopTracks').mockReturnValue(of(TRACK_DATA_STUB));
    service.getArtistTopTracks('1')
      .subscribe(artist => {
        expect(artist).toBeTruthy();
        expect(artist.length).toEqual(2);
        done();
      })
    expect(service.getArtistTopTracks).toHaveBeenCalledTimes(1);
  });


});

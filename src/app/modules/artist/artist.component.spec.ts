import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ArtistComponent} from './artist.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SharedModule} from "../../shared/shared.module";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

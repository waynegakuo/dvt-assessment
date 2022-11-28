import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostArtistDetailsCardComponent } from './ghost-artist-details-card.component';

describe('GhostArtistDetailsCardComponent', () => {
  let component: GhostArtistDetailsCardComponent;
  let fixture: ComponentFixture<GhostArtistDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostArtistDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhostArtistDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

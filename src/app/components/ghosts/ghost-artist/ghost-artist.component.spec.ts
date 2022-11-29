import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostArtistComponent } from './ghost-artist.component';

describe('GhostArtistComponent', () => {
  let component: GhostArtistComponent;
  let fixture: ComponentFixture<GhostArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhostArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

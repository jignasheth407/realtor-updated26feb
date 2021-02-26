import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSavedListingComponent } from './profile-saved-listing.component';

describe('ProfileSavedListingComponent', () => {
  let component: ProfileSavedListingComponent;
  let fixture: ComponentFixture<ProfileSavedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSavedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSavedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

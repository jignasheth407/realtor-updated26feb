import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitListingComponent } from './submit-listing.component';

describe('SubmitListingComponent', () => {
  let component: SubmitListingComponent;
  let fixture: ComponentFixture<SubmitListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

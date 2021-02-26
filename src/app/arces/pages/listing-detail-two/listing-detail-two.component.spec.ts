import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailTwoComponent } from './listing-detail-two.component';

describe('ListingDetailTwoComponent', () => {
  let component: ListingDetailTwoComponent;
  let fixture: ComponentFixture<ListingDetailTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

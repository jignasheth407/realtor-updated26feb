import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailOneComponent } from './listing-detail-one.component';

describe('ListingDetailOneComponent', () => {
  let component: ListingDetailOneComponent;
  let fixture: ComponentFixture<ListingDetailOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

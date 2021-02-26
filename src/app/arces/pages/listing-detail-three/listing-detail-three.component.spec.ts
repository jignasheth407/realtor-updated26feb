import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailThreeComponent } from './listing-detail-three.component';

describe('ListingDetailThreeComponent', () => {
  let component: ListingDetailThreeComponent;
  let fixture: ComponentFixture<ListingDetailThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

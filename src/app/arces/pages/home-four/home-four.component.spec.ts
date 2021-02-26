import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFourComponent } from './home-four.component';

describe('HomeFourComponent', () => {
  let component: HomeFourComponent;
  let fixture: ComponentFixture<HomeFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

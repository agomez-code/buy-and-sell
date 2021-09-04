import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyListingsPageComponent } from './my-listings-page.component';

describe('MyListingsPageComponent', () => {
  let component: MyListingsPageComponent;
  let fixture: ComponentFixture<MyListingsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

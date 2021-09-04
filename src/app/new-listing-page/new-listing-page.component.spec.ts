import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewListingPageComponent } from './new-listing-page.component';

describe('NewListingPageComponent', () => {
  let component: NewListingPageComponent;
  let fixture: ComponentFixture<NewListingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

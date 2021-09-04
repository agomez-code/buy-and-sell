import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListingDetailPageComponent } from './listing-detail-page.component';

describe('ListingDetailPageComponent', () => {
  let component: ListingDetailPageComponent;
  let fixture: ComponentFixture<ListingDetailPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

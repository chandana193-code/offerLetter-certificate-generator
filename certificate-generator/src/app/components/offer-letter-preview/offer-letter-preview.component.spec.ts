import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLetterPreviewComponent } from './offer-letter-preview.component';

describe('OfferLetterPreviewComponent', () => {
  let component: OfferLetterPreviewComponent;
  let fixture: ComponentFixture<OfferLetterPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferLetterPreviewComponent]
    });
    fixture = TestBed.createComponent(OfferLetterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

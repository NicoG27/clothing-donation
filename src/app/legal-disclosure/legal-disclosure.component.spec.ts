import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDisclosureComponent } from './legal-disclosure.component';

describe('LegalDisclosureComponent', () => {
  let component: LegalDisclosureComponent;
  let fixture: ComponentFixture<LegalDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalDisclosureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

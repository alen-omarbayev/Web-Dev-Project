import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAdComponent } from './generate-ad.component';

describe('GenerateAdComponent', () => {
  let component: GenerateAdComponent;
  let fixture: ComponentFixture<GenerateAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

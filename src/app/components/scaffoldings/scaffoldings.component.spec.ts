import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldingsComponent } from './scaffoldings.component';

describe('ScaffoldingsComponent', () => {
  let component: ScaffoldingsComponent;
  let fixture: ComponentFixture<ScaffoldingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScaffoldingsComponent]
    });
    fixture = TestBed.createComponent(ScaffoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

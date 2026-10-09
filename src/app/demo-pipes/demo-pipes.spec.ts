import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipesComponent } from './demo-pipes';

describe('DemoPipes', () => {
  let component: DemoPipesComponent;
  let fixture: ComponentFixture<DemoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoPipesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

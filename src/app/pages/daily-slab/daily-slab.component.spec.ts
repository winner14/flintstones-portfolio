import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySlabComponent } from './daily-slab.component';

describe('DailySlabComponent', () => {
  let component: DailySlabComponent;
  let fixture: ComponentFixture<DailySlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailySlabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

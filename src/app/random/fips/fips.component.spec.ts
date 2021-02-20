import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIPSComponent } from './fips.component';

describe('FIPSComponent', () => {
  let component: FIPSComponent;
  let fixture: ComponentFixture<FIPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

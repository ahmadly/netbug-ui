import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHomeComponent } from './random-home.component';

describe('RandomHomeComponent', () => {
  let component: RandomHomeComponent;
  let fixture: ComponentFixture<RandomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

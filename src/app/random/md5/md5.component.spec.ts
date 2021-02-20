import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MD5Component } from './md5.component';

describe('MD5Component', () => {
  let component: MD5Component;
  let fixture: ComponentFixture<MD5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MD5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MD5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

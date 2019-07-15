import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetwentyComponent } from './onetwenty.component';

describe('OnetwentyComponent', () => {
  let component: OnetwentyComponent;
  let fixture: ComponentFixture<OnetwentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetwentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

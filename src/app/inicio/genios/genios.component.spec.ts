import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeniosComponent } from './genios.component';

describe('GeniosComponent', () => {
  let component: GeniosComponent;
  let fixture: ComponentFixture<GeniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

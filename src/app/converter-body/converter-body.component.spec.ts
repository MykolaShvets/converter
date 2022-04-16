import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterBodyComponent } from './converter-body.component';

describe('ConverterBodyComponent', () => {
  let component: ConverterBodyComponent;
  let fixture: ComponentFixture<ConverterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingsComponent } from './style-bindings.component';

describe('StyleBindingsComponent', () => {
  let component: StyleBindingsComponent;
  let fixture: ComponentFixture<StyleBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

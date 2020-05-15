import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingsComponent } from './class-bindings.component';

describe('ClassBindingsComponent', () => {
  let component: ClassBindingsComponent;
  let fixture: ComponentFixture<ClassBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

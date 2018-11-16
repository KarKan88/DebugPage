import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOutletComponent } from './register-outlet.component';

describe('RegisterOutletComponent', () => {
  let component: RegisterOutletComponent;
  let fixture: ComponentFixture<RegisterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

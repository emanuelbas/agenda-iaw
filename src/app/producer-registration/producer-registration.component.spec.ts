import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerRegistrationComponent } from './producer-registration.component';

describe('ProducerRegistrationComponent', () => {
  let component: ProducerRegistrationComponent;
  let fixture: ComponentFixture<ProducerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

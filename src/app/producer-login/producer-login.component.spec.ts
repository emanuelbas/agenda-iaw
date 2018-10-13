import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerLoginComponent } from './producer-login.component';

describe('ProducerLoginComponent', () => {
  let component: ProducerLoginComponent;
  let fixture: ComponentFixture<ProducerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

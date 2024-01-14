import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReserverTacheComponent } from './form-reserver-tache.component';

describe('FormReserverTacheComponent', () => {
  let component: FormReserverTacheComponent;
  let fixture: ComponentFixture<FormReserverTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReserverTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReserverTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

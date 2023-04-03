import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let fakeService: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [{ provide: EmployeeService, useValue: fakeService }],
    }).compileComponents();

    fakeService = TestBed.inject(EmployeeService);

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form', () => {
    const data = {
      empId: '9876',
      firstName: 'Nithiya',
      lastName: 'Mani',
      email: 'nithiya@gmail.com',
      mobile: 9876543210,
      address: 'xxxxxx',
    };
    let spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm(data);
    expect(spy).toHaveBeenCalled();
  });
});

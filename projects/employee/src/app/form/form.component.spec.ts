import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Observable, of } from 'rxjs';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let fakeService: jasmine.SpyObj<EmployeeService>;

  beforeEach(async () => {
    const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', [
      'postEmployeeDetail',
    ]);
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: EmployeeService, useValue: employeeServiceSpy }],
    }).compileComponents();

    fakeService = TestBed.inject(
      EmployeeService
    ) as jasmine.SpyObj<EmployeeService>;

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call submitForm', () => {
    const formValue = {
      empId: '1234',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      mobile: '9876543210',
      address: '123 Main Street',
    };
    component.employeeForm.setValue(formValue);
    fakeService.postEmployeeDetail.and.returnValue(of());
    component.submitForm();
    expect(fakeService.postEmployeeDetail).toHaveBeenCalledWith(formValue);
  });
});

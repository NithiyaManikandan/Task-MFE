import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  employeeForm!: FormGroup;
  lang: string | undefined;
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      empId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{4}$'),
      ]),

      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[[A-Z]{1}[a-z]{5,10}$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z]{1}[a-z]{3,}'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[a-z0-9-_.]+@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$'
        ),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^[6-9]{1}[0-9]{9}$'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-zd]{4,}$'),
      ]),
    });
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  submitForm() {
    this.employeeService
      .postEmployeeDetail(this.employeeForm.value)
      .subscribe();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, Employee } from '../../../../demo/src/Ngrx/models/model';
import { EmployeeService } from '../service/employee.service';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  col: Column[] = [];
  data: Employee[] = [];
  selectedItem: boolean = false;
  getData: boolean = false;
  searchText: any;
  constructor(
    private employeeService: EmployeeService,
    private store: Store<any>,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');

    this.employeeService.getAllEmployeeDetails().subscribe((res) => {
      this.data = res as Employee[];
      if (this.data) {
        this.getData = true;
      }
    });
    this.employeeService.getTableColumn().subscribe((res) => {
      this.col = res;
    });
  }

  searchEmployeeData($event: any) {
    this.employeeService.searchData($event).subscribe((res) => {
      this.data = res as Employee[];
    });
  }

  applyFilter() {
    this.selectedItem = !this.selectedItem;
  }
}

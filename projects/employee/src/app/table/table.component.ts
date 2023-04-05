import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, Employee } from '../../../../project/Ngrx/models/model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  col: Column[] = [];
  data: Employee[] = [];
  selectedItem: boolean = false;
  searchText: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAllEmployeeDetails().subscribe((res) => {
      this.data = res;
    });
    this.employeeService.getTableColumn().subscribe((res) => {
      this.col = res
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

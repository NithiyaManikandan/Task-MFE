import { Component, OnInit, ViewChild } from '@angular/core';
import { Column, Employee } from '../../../../Ngrx/models/employee.model';
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
  ngOnInit(): void {
    this.employeeService.getAllEmployeeDetails().subscribe((res) => {
      this.data = res as Employee[];
    });
    this.employeeService.getTableColumn().subscribe((res) => {
      this.col = res as Column[];
    });
  }
  searchData($event: any) {
    this.employeeService.searchData($event).subscribe((res) => {
      this.data = res as unknown as Employee[];
    });
  }

  applyFilter() {
    this.selectedItem = !this.selectedItem;
  }
}

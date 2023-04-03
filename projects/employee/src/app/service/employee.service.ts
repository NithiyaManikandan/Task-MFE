import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  finalFilter: any[] = [];
  constructor(private http: HttpClient) {}

  postEmployeeDetail(employeeDetail: any) {
    return this.http.post(
      `http://localhost:3000/data`,
      employeeDetail
    );
  }

  getAllEmployeeDetails() {
    return this.http.get(`http://localhost:3000/data`);
  }

  getTableColumn() {
    return this.http.get(`http://localhost:3000/column`);
  }

  searchData(data: any) {
    return this.http.get(`http://localhost:3000/data`).pipe(
      map((res : any) => {
        let filterData: any[] = [];
        res.filter((d : any) =>
          Object.values(d).filter((da : any) => {
            da.toString().includes(data) ? filterData.push(d) : null;
          })
        );
        filterData = filterData.filter(
          (item, index) => filterData.indexOf(item) === index
        );
        return filterData;
      })
    );
  }
}

//(d.empId.toString().includes(data) ? d : null)

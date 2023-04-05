import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeService } from 'projects/employee/src/app/service/employee.service';
import { Data } from 'projects/Ngrx/state/employee.state';
import { ProjectServiceService } from '../../service/project-service.service';
import { forkJoin, map } from 'rxjs';
import { addPost } from 'projects/Ngrx/state/employee.action';
import { Employee, Project } from 'projects/project/Ngrx/models/model';
@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
})
export class ProjectDashboardComponent {
  addProjectOption: boolean = false;
  assignProjectOption: boolean = false;

  constructor(
    private store: Store<Data>,
    private employeeService: EmployeeService,
    private projectService: ProjectServiceService
  ) {}
  addProject() {
    this.addProjectOption = true;
    this.assignProjectOption = false;
  }
  assignProject() {
    let result: any[] = [];
    forkJoin({
      employee: this.employeeService.getAllEmployeeDetails(),
      project: this.projectService.getAllProject(),
    })
      .pipe(
        map((response) => {
          const employee = <Array<any>>response.employee;
          const project = <Array<any>>response.project;
          result = [{ employee: { ...employee } }, { project: { ...project } }];
        })
      )
      .subscribe(() => {
        this.store.dispatch(addPost({ data: result }));
        this.assignProjectOption = true;
        this.addProjectOption = false;
      });
  }
}

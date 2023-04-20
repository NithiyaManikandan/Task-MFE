import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeService } from 'projects/employee/src/app/service/employee.service';
import { Data } from '../../../../demo/src/Ngrx/state/state';
import { ProjectServiceService } from '../../service/project-service.service';
import { forkJoin, map } from 'rxjs';
import { addPost } from '../../../../demo/src/Ngrx/state/action';
@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
})
export class ProjectDashboardComponent {
  addProjectOption: boolean = false;
  assignProjectOption: boolean = false;
  result: any[] = [];

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
    forkJoin({
      employee: this.employeeService.getAllEmployeeDetails(),
      project: this.projectService.getAllProject(),
    })
      .pipe(
        map((response) => {
          const employee = <Array<any>>response.employee;
          const project = <Array<any>>response.project;
          this.result = [
            { employee: { ...employee } },
            { project: { ...project } },
          ];
          this.assignProjectOption = true;
          this.addProjectOption = false;
        })
      )
      .subscribe(() => {});
  }
}

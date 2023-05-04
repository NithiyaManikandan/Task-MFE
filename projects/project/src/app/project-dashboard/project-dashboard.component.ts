import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeService } from 'projects/employee/src/app/service/employee.service';
import { Data } from '../../../../demo/src/Ngrx/state/state';
import { ProjectServiceService } from '../../service/project-service.service';
import { forkJoin, map } from 'rxjs';
import { addPost } from '../../../../demo/src/Ngrx/state/action';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
})
export class ProjectDashboardComponent implements OnInit {
  addProjectOption: boolean = false;
  assignProjectOption: boolean = false;
  result: any[] = [];

  constructor(
    private store: Store<Data>,
    private employeeService: EmployeeService,
    private projectService: ProjectServiceService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

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
      .subscribe(() => {
        this.store.dispatch(addPost({ data: this.result }));
      });
  }
}

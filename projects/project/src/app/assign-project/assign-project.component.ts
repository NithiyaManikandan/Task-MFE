import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Employee } from 'projects/project/Ngrx/models/model';
import { Observable, Subject } from 'rxjs';
import { ProjectServiceService } from '../../service/project-service.service';
@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.scss'],
})
export class AssignProjectComponent implements OnInit {
  dataValue!: any;
  employee!: any;
  project!: any;
  constructor(
    private store: Store<any>,
    public fb: FormBuilder,
    private projectService: ProjectServiceService,
    private route: Router
  ) {}
  ProjectForm = this.fb.group({
    empId: ['', [Validators.required]],
    projectId: ['', [Validators.required]],
  });
  ngOnInit(): void {
    this.store.select('data').subscribe((res) => {
      this.employee = Object.values(res.data[0].employee);
      this.project = Object.values(res.data[1].project);
    });
  }

  onSubmit() {
    this.projectService.postAssignedProject(this.ProjectForm.value).subscribe();
    this.route.navigateByUrl('');
  }
}

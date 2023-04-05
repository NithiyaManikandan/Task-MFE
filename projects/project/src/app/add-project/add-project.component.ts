import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProjectServiceService } from '../../service/project-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;
  constructor(
    private projectService: ProjectServiceService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z]{3}[0-9]{4}$'),
      ]),

      projectName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]{3,}$'),
      ]),
      description: new FormControl('', [Validators.required]),
    });
  }
  submitForm() {
    this.projectService.postProjectData(this.projectForm.value).subscribe();
  }
}

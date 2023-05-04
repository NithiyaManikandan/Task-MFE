import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProjectServiceService } from '../../service/project-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;
  constructor(
    private projectService: ProjectServiceService,
    private fb: FormBuilder,
    private translateService: TranslateService
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

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  submitForm() {
    this.projectService.postProjectData(this.projectForm.value).subscribe();
  }
}

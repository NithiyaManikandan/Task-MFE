import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ProjectServiceService } from '../../service/project-service.service';
import { AddProjectComponent } from './add-project.component';
import { TranslateModule } from '@ngx-translate/core';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let fakeService: ProjectServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(async () => {
    const projectService = {
      postProjectData: jasmine
        .createSpy('postProjectData')
        .and.returnValue(of([{}])),
    };

    await TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      providers: [{ provide: ProjectServiceService, useValue: projectService }],
      imports: [ReactiveFormsModule, HttpClientModule, TranslateModule.forRoot(),],
    }).compileComponents();

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fakeService = TestBed.inject(ProjectServiceService)as jasmine.SpyObj<ProjectServiceService>;

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let spy = spyOn(component,'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });
});

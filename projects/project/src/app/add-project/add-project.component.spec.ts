import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectServiceService } from '../../service/project-service.service';

import { AddProjectComponent } from './add-project.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let fakeService: ProjectServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      providers: [{ provide: ProjectServiceService, useValue: fakeService }],
    }).compileComponents();

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fakeService = TestBed.inject(ProjectServiceService);

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
  });
});

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { assignedProject, projectData } from 'projects/response';
import { of } from 'rxjs';

import { ProjectServiceService } from './project-service.service';

describe('ProjectServiceService', () => {
  let service: ProjectServiceService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ProjectServiceService);
  });

  it('should be call postEmployeeDetail', () => {
    const data = {
      empId: '9876',
      projectId: 'MFE9876',
    };
    spyOn(httpClient, 'post').and.returnValue(of(assignedProject));
    service.postAssignedProject(data).subscribe();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should be call postEmployeeDetail', () => {
    const data = {
      projectId: 'MFE9876',
      projectName: 'MicroFrontEnd',
      description:
        'Micro-frontends are small applications mostly divided by subdomain or functionality working together to deliver a larger application',
    };

    spyOn(httpClient, 'post').and.returnValue(of(projectData));
    service.postProjectData(data).subscribe();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should be call postEmployeeDetail', () => {
    spyOn(httpClient, 'get').and.returnValue(of(projectData));
    service.getAllProject().subscribe();
    expect(httpClient.get).toHaveBeenCalled();
  });
});

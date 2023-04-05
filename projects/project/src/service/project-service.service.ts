import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(private http: HttpClient) {}

  postProjectData(projectData: any) {
    return this.http.post(`http://localhost:3000/project`, projectData);
  }

  getAllProject() {
    return this.http.get(`http://localhost:3000/project`);
  }

  postAssignedProject(assignedProjectData: any) {
    return this.http.post(
      `http://localhost:3000/assignedProject`,
      assignedProjectData
    );
  }
}

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { EmployeeService } from 'projects/employee/src/app/service/employee.service';
import { Data } from 'projects/Ngrx/state/employee.state';
import { ProjectServiceService } from '../../service/project-service.service';
import { ProjectDashboardComponent } from './project-dashboard.component';

describe('ProjectDashboardComponent', () => {
  let component: ProjectDashboardComponent;
  let fixture: ComponentFixture<ProjectDashboardComponent>;
  let store: MockStore<Data>;
  const initialState = {
    data: [],
  };
  let employeeService: EmployeeService;
  let projectService: ProjectServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDashboardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: EmployeeService, useValue: employeeService },
        { provide: ProjectServiceService, useValue: projectService },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProjectDashboardComponent);

    employeeService = TestBed.inject(EmployeeService);
    projectService = TestBed.inject(ProjectServiceService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call assignProject', () => {
    spyOn(component, 'assignProject').and.callThrough();
    component.assignProject();
    expect(store.select).toHaveBeenCalled();
  });

  it('should call assignProject', () => {
    let spy = spyOn(component, 'addProject').and.callThrough();
    component.addProject();
    expect(spy).toHaveBeenCalled()
  });
});

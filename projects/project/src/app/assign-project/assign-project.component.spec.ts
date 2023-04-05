import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectServiceService } from '../../service/project-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../app-routing.module';
import { AssignProjectComponent } from './assign-project.component';
import { Data } from 'projects/Ngrx/state/employee.state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AssignProjectComponent', () => {
  let component: AssignProjectComponent;
  let fixture: ComponentFixture<AssignProjectComponent>;
  let fakeService: ProjectServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let store: MockStore<Data>;
  const initialState = {
    data: [],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignProjectComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: ProjectServiceService, useValue: fakeService },
      ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, AppRoutingModule],
    }).compileComponents();

    fakeService = TestBed.inject(ProjectServiceService);
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(AssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create assign project', () => {
    let spy = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});

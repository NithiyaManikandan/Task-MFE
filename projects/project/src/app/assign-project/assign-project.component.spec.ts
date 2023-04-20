import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectServiceService } from '../../service/project-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../app-routing.module';
import { AssignProjectComponent } from './assign-project.component';
import { Data } from '../../../../demo/src/Ngrx/state/state';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { data } from 'projects/response';
import { of } from 'rxjs';
describe('AssignProjectComponent', () => {
  let component: AssignProjectComponent;
  let fixture: ComponentFixture<AssignProjectComponent>;
  let fakeService: ProjectServiceService;
  let router: jasmine.SpyObj<Router>;
  let store: MockStore<Data>;
  const initialState = {
    data: [],
  };
  beforeEach(async () => {
    const mockProjectService = {
      postAssignedProject: jasmine
        .createSpy('postAssignedProject')
        .and.returnValue(of([{}])),
    };
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [AssignProjectComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: ProjectServiceService, useValue: mockProjectService },
        { provide: Router, useValue: router },
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        AppRoutingModule,
      ],
    }).compileComponents();

    fakeService = TestBed.inject(ProjectServiceService);
    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(AssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create assign project', () => {
    let spy = spyOn(component,'onSubmit').and.callThrough();
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});

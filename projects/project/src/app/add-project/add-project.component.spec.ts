import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
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
      imports: [ReactiveFormsModule, HttpClientModule],
    }).compileComponents();

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fakeService = TestBed.inject(ProjectServiceService);

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let spy = spyOn(component, 'submitForm').and.callThrough();
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });
});

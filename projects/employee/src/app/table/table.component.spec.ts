import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../service/employee.service';
import { columnResponse, mockResponse } from '../service/response';
import { of } from 'rxjs';
import { TableComponent } from './table.component';

describe('EmployeeTableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: EmployeeService;
  let fakeService: EmployeeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [HttpClientModule],
      providers: [{ provide: EmployeeService, useValue: fakeService }],
    })
    .compileComponents();

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(EmployeeService);

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create getAllEmployeeDetails', () => {
    // let spy1 = spyOn(service, 'getAllEmployeeDetails').and.returnValue(of(mockResponse));
    // let spy2= spyOn(service, 'getTableColumn').and.returnValue(of(columnResponse));
    // service.getAllEmployeeDetails().subscribe()
    // service.getTableColumn().subscribe()
    // expect(spy1).toHaveBeenCalled();
    // expect(spy2).toHaveBeenCalled();

  });
});

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../service/employee.service';
import { columnResponse, mockResponse } from '../../../../response';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { Column, Employee } from 'projects/project/Ngrx/models/model';

describe('EmployeeTableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: EmployeeService;
  let fakeService: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [HttpClientTestingModule, HttpClientModule, TableModule],
      providers: [{ provide: EmployeeService, useValue: fakeService }],
    }).compileComponents();

    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(EmployeeService);

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call searchData', () => {
    spyOn(component,'applyFilter').and.callThrough()
    component.applyFilter()
    expect(component.applyFilter()).toHaveBeenCalled()
  });

});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../service/employee.service';
import { columnResponse, expectedValue } from '../../../../response';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


describe('EmployeeTableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let fakeService: EmployeeService;

  beforeEach(async () => {

    const employeeServiceMock = {
      getAllEmployeeDetails: () => of([expectedValue]),
      getTableColumn: () => of([columnResponse]),
      searchData: (searchTerm: string) => {
        let filteredData = [expectedValue].filter((employee) =>
          employee.toString().includes(searchTerm.toLowerCase())
        );
        filteredData = filteredData.filter(
          (item, index) => filteredData.indexOf(item) === index
        );
        return of(filteredData);
      },
    };

    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        TableModule,
        FormsModule,
      ],
      providers: [{ provide: EmployeeService, useValue: employeeServiceMock }],
    }).compileComponents();


    fakeService = TestBed.inject(EmployeeService);
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getAllEmployeeDetails and getTableColumn', () => {
    component.ngOnInit();
    let spy1 = spyOn(fakeService, 'getAllEmployeeDetails').and.returnValue(
      of(expectedValue)
    );
    fakeService.getAllEmployeeDetails().subscribe();
    expect(spy1).toHaveBeenCalled();
    let spy2 = spyOn(fakeService, 'getTableColumn').and.returnValue(
      of(columnResponse as any)
    );
    fakeService.getTableColumn().subscribe();
    expect(spy2).toHaveBeenCalled();
  });

  it('should call searchData', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    component.searchEmployeeData('j');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.data[0]).toEqual(expectedValue as any);
  });

  it('should call applyFilter', () => {
    component.selectedItem = false;
    component.applyFilter();
    expect(component.selectedItem).toBe(true);
  });
});

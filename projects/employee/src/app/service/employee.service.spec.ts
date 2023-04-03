import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { mockResponse ,columnResponse} from './response';
import { EmployeeService } from './employee.service';
import { of } from 'rxjs';
describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(EmployeeService);
  });

  it('should be call postEmployeeDetail', () => {
    const data = {
      empId: '9876',
      firstName: 'Nithiya',
      lastName: 'Mani',
      email: 'nithiya@gmail.com',
      mobile: 9876543210,
      address: 'xxxxxx',
    };
    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));
    service.postEmployeeDetail(data).subscribe();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('should be call getAllEmployeeDetails', () => {
    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));
    service.getAllEmployeeDetails().subscribe();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should be call getTableColumn', () => {
    spyOn(httpClient, 'get').and.returnValue(of(columnResponse));
    service.getTableColumn().subscribe();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should be call getTableColumn', () => {
    const data = [{
      empId: '9876',
      firstName: 'Nithiya',
      lastName: 'Mani',
      email: 'nithiya@gmail.com',
      mobile: 9876543210,
      address: 'xxxxxx',
    }]
    const search = 'ka'

    spyOn(httpClient, 'get').and.returnValue(of(data));
    service.searchData(search).subscribe();
    expect(httpClient.get).toHaveBeenCalled();
  });


});

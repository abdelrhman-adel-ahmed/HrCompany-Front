import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchDTO } from '../shared/models/SearchDTO';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../shared/models/EmployeeDTO';
import { EmployeeLoginDTO } from '../shared/models/EmployeeLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_URL = 'https://localhost:7009/Api/Employee/';
  constructor(private httpClient: HttpClient) {
  }

  public getEmployeeDate(searchDTO: SearchDTO) : Observable<EmployeeDTO[]> {
    return this.httpClient.get<EmployeeDTO[]>(this.API_URL + 'GetEmployeePage/' ,{params: {...searchDTO}});
  }

  public getManagerList() : Observable<EmployeeDTO[]> {
    return this.httpClient.get<EmployeeDTO[]>(this.API_URL + 'GetManagerList/');
  }
  public addEmployee(emp : EmployeeDTO){
    return this.httpClient.post(this.API_URL + 'AddEmployee/',emp);
  }

  public getEmployeeAttendance(){
    return this.httpClient.get<EmployeeLoginDTO[]>(this.API_URL + 'GetEmployeeAttendance/');
  }

}

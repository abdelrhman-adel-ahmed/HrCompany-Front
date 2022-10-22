import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/empServices.service';
import { EmployeeLoginDTO } from '../shared/models/EmployeeLoginDTO';

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './emp-attendance.component.html',
  styleUrls: ['./emp-attendance.component.css']
})
export class EmpAttendanceComponent implements OnInit {

  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {
      this.employeeService.getEmployeeAttendance().subscribe((data:any)=>{
        this.employeeAttendanceList= data;

      });
  }
  employeeAttendanceList: EmployeeLoginDTO[];
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Services/empServices.service';
import { EmployeeDTO } from '../shared/models/EmployeeDTO';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  constructor(private empService:EmployeeService, private router: Router) { }

  ngOnInit(): void {
      this.empService.getManagerList().subscribe((data: EmployeeDTO[]) => {
      this.managersList = data;
    });
  }
  managersList : EmployeeDTO[];
  createdEmployee : EmployeeDTO = new EmployeeDTO();
  managerSelectHasError : boolean = true;

  validateManagerSelect(value: any)
  {
      if(value === "default"){
        this.managerSelectHasError = true;
      }
      else{
        this.managerSelectHasError = false;
      }
  }
  onSubmit() {
    this.empService.addEmployee(this.createdEmployee).subscribe(()=>{
      this.router.navigate(["employeeList"]);
    }
    );
  }
}

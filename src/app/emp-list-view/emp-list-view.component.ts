import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Services/empServices.service';
import { EmployeeDTO } from '../shared/models/EmployeeDTO';
import { SearchDTO } from '../shared/models/SearchDTO';

@Component({
  selector: 'app-emp-list-view',
  templateUrl: './emp-list-view.component.html',
  styleUrls: ['./emp-list-view.component.css']
})
export class EmpListViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private empService:EmployeeService ,
              private router: Router) { }

  employeeList: EmployeeDTO[];
  searchDto : SearchDTO = new SearchDTO();

  ngOnInit(): void {
    this.rebindGrid();
  }
  private rebindGrid(): void {
    this.getEmployeeData();
  }
  private getEmployeeData() {
    this.empService.getEmployeeDate(this.searchDto).subscribe((data: EmployeeDTO[]) => {
      if(data.length == 0){
        this.onPageSelect("prev");
      }
      this.employeeList = data;
  });
  }
  addEmployee(){
    this.router.navigate(["addEmployee"])
  }
 searchClick(form: NgForm)
  {
      this.searchDto.employeeName = form.value.empName;
      this.getEmployeeData();
  }
  onPageSelect(value:string){
      if(value === "prev"){
        if(this.searchDto.skip == 0) return;
        this.searchDto.skip -= 10;
      }
      else if(value ==="next"){
        if(this.employeeList.length < 10) return;
        this.searchDto.skip += 10;
      }
      this.rebindGrid();
  }
}

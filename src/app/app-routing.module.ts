import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { EmpListViewComponent } from './emp-list-view/emp-list-view.component';

const routes: Routes = [
  { path: '', redirectTo:'listEmployee', pathMatch: 'full' },
  { path: 'listEmployee', component:  EmpListViewComponent},
  { path: 'addEmployee', component:  EmpAddComponent},
  { path: 'employeeAttendance', component:  EmpAttendanceComponent},
  { path: '**', redirectTo:'listEmployee'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

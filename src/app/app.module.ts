import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListViewComponent } from './emp-list-view/emp-list-view.component';
import { HeaderComponent } from './header/header.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpListViewComponent,
    EmpAddComponent,
    EmpAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

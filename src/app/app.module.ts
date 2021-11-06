import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PositionComponent } from './components/position/position.component';
import { UpdatePositionComponent } from './components/update-position/update-position.component';
import { CreatePositionComponent } from './components/create-position/create-position.component';
import { DepartmentComponent } from './components/department/department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { TypeoperationComponent } from './components/typeoperation/typeoperation.component';
import { UpdateTypeoperationComponent } from './components/update-typeoperation/update-typeoperation.component';
import { CreateTypeoperationComponent } from './components/create-typeoperation/create-typeoperation.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeoperationComponent } from './components/employeeoperation/employeeoperation.component';
import { CreateEmployeeoperationComponent } from './components/create-employeeoperation/create-employeeoperation.component';
import { UpdateEmployeeoperationComponent } from './components/update-employeeoperation/update-employeeoperation.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    UpdatePositionComponent,
    CreatePositionComponent,
    DepartmentComponent,
    UpdateDepartmentComponent,
    CreateDepartmentComponent,
    TypeoperationComponent,
    UpdateTypeoperationComponent,
    CreateTypeoperationComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    EmployeeoperationComponent,
    CreateEmployeeoperationComponent,
    UpdateEmployeeoperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

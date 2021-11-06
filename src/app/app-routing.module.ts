import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UpdateEmployeeoperationComponent } from './components/update-employeeoperation/update-employeeoperation.component';
import { CreateEmployeeoperationComponent } from './components/create-employeeoperation/create-employeeoperation.component';

const routes: Routes = [
  {path: 'positions', component: PositionComponent },
  {path: 'positions/:id', component: UpdatePositionComponent},
  {path: 'create-position', component: CreatePositionComponent},
  {path: 'departments', component: DepartmentComponent },
  {path: 'departments/:id', component: UpdateDepartmentComponent},
  {path: 'create-department', component: CreateDepartmentComponent},
  {path: 'typeoperations', component: TypeoperationComponent },
  {path: 'typeoperations/:id', component: UpdateTypeoperationComponent},
  {path: 'create-typeoperation', component: CreateTypeoperationComponent},
  {path: 'employees', component: EmployeeComponent },
  {path: 'employees/:id', component: UpdateEmployeeComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'employeeoperations', component: EmployeeoperationComponent },
  {path: 'employeeoperations/:id', component: UpdateEmployeeoperationComponent},
  {path: 'create-employeeoperation', component: CreateEmployeeoperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

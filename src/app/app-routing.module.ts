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

const routes: Routes = [
  {path: 'positions', component: PositionComponent },
  {path: 'positions/:id', component: UpdatePositionComponent},
  {path: 'create-position', component: CreatePositionComponent},
  {path: 'departments', component: DepartmentComponent },
  {path: 'departments/:id', component: UpdateDepartmentComponent},
  {path: 'create-department', component: CreateDepartmentComponent},
  {path: 'typeoperations', component: TypeoperationComponent },
  {path: 'typeoperations/:id', component: UpdateTypeoperationComponent},
  {path: 'create-typeoperation', component: CreateTypeoperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

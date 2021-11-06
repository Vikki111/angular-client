import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionComponent } from './components/position/position.component';
import { UpdatePositionComponent } from './components/update-position/update-position.component';
import { CreatePositionComponent } from './components/create-position/create-position.component';

const routes: Routes = [
  { path: 'positions', component: PositionComponent },
  {path: '', redirectTo: 'positions', pathMatch: 'full'},
  {path: 'positions/:id', component: UpdatePositionComponent},
  {path: 'create-position', component: CreatePositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

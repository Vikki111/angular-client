import { Component, OnInit } from '@angular/core';
import { Employeeoperation } from '../../components/employeeoperation/employeeoperation';
import { EmployeeoperationService } from "../../components/employeeoperation/employeeoperation.service";
import { PositionService } from "../../components/position/position.service";
import { Position } from '../../components/position/position';
import { TypeoperationService } from "../../components/typeoperation/typeoperation.service";
import { Typeoperation } from '../../components/typeoperation/typeoperation';
import { DepartmentService } from "../../components/department/department.service";
import { Department } from '../../components/department/department';
import { EmployeeService } from "../../components/employee/employee.service";
import { Employee } from '../../components/employee/employee';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employeeoperation',
  templateUrl: './create-employeeoperation.component.html',
  styleUrls: ['./create-employeeoperation.component.scss']
})
export class CreateEmployeeoperationComponent implements OnInit {

 employeeoperation: Employeeoperation = new Employeeoperation();

 employees: Employee[] = [];
 positions: Position[] = [];
 typeoperations: Typeoperation[] = [];
 departments: Department[] = [];

   constructor(private employeeoperationService: EmployeeoperationService,
   private positionService: PositionService,
   private typeoperationService: TypeoperationService,
   private departmentService: DepartmentService,
   private employeeService: EmployeeService,
     private router: Router) {
      this.positionService.getPositionsList().subscribe(positions => this.positions = positions);
      this.typeoperationService.getTypeoperationsList().subscribe(typeoperations => this.typeoperations = typeoperations);
      this.departmentService.getDepartmentsList().subscribe(departments => this.departments = departments);
      this.employeeService.getEmployeesList().subscribe(employees => this.employees = employees);
      }

   ngOnInit(): void {
   }

   saveEmployeeoperation(){
     this.employeeoperationService.createEmployeeoperation(this.employeeoperation).subscribe( data =>{
       console.log(data);
       this.goToEmployeeoperationList();
     },
     error => console.log(error));
   }

   goToEmployeeoperationList(){
     this.router.navigate(['employeeoperations']);
   }

   onSubmit(){
     console.log(this.employeeoperation);
     this.saveEmployeeoperation();
   }
}

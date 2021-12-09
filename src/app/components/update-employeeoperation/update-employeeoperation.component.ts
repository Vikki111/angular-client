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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employeeoperation',
  templateUrl: '../../components/update-employeeoperation/update-employeeoperation.component.html',
  styleUrls: ['../../components/update-employeeoperation/update-employeeoperation.component.scss']
})
export class UpdateEmployeeoperationComponent implements OnInit {

    id: number;
    employeeoperation: Employeeoperation = new Employeeoperation();
    date = new Date().toISOString().split('T')[0];

    employees: Employee[] = [];
    positions: Position[] = [];
    typeoperations: Typeoperation[] = [];
    departments: Department[] = [];

    constructor(private employeeoperationService: EmployeeoperationService,
        private route: ActivatedRoute,
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

    ngOnInit() {
      this.employeeoperation = new Employeeoperation();

      this.id = this.route.snapshot.params['id'];

      this.employeeoperationService.getEmployeeoperation(this.id)
        .subscribe(data => {
          console.log(data);
          this.employeeoperation = data;
          this.date = new Date(this.employeeoperation.dateOperation).toISOString().split('T')[0];
        }, error => console.log(error));
    }

    updateEmployeeoperation() {
      this.employeeoperationService.updateEmployeeoperation(this.id, this.employeeoperation)
        .subscribe(data => {
          console.log(data);
          this.employeeoperation = new Employeeoperation();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updateEmployeeoperation();
    }

    gotoList() {
      this.router.navigate(['employeeoperations']);
    }
}

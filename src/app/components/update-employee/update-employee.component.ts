import { Component, OnInit } from '@angular/core';
import { Employee } from '../../components/employee/employee';
import { EmployeeService } from "../../components/employee/employee.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: '../../components/update-employee/update-employee.component.html',
  styleUrls: ['../../components/update-employee/update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

    id: number;
    employee: Employee = new Employee();
    date = new Date().toISOString().split('T')[0];

    constructor(private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
      this.employee = new Employee();

      this.id = this.route.snapshot.params['id'];

      this.employeeService.getEmployee(this.id)
        .subscribe(data => {
          console.log(data)
          this.employee = data;
          this.date = new Date(this.employee.birthday).toISOString().split('T')[0];
        }, error => console.log(error));
    }

    updateEmployee() {
      this.employeeService.updateEmployee(this.id, this.employee)
        .subscribe(data => {
          console.log(data);
          this.employee = new Employee();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updateEmployee();
    }

    gotoList() {
      this.router.navigate(['employees']);
    }
}

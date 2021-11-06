import { Component, OnInit } from '@angular/core';
import { Employeeoperation } from '../../components/employeeoperation/employeeoperation';
import { EmployeeoperationService } from "../../components/employeeoperation/employeeoperation.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employeeoperation',
  templateUrl: '../../components/update-employeeoperation/update-employeeoperation.component.html',
  styleUrls: ['../../components/update-employeeoperation/update-employeeoperation.component.scss']
})
export class UpdateEmployeeoperationComponent implements OnInit {

    id: number;
    employeeoperation: Employeeoperation = new Employeeoperation();

    constructor(private employeeoperationService: EmployeeoperationService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
      this.employeeoperation = new Employeeoperation();

      this.id = this.route.snapshot.params['id'];

      this.employeeoperationService.getEmployeeoperation(this.id)
        .subscribe(data => {
          console.log(data)
          this.employeeoperation = data;
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

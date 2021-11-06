import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeoperationService } from "../../components/employeeoperation/employeeoperation.service";
import { Employeeoperation } from '../../components/employeeoperation/employeeoperation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeeoperation',
  templateUrl: '../../components/employeeoperation/employeeoperation.component.html',
  styleUrls: ['../../components/employeeoperation/employeeoperation.component.scss']
})
export class EmployeeoperationComponent implements OnInit {
   employeeoperations: Observable<Employeeoperation[]>;

  constructor(private employeeoperationService: EmployeeoperationService, private route: ActivatedRoute,
                                                            private router: Router) {
      this.employeeoperations = this.employeeoperationService.getEmployeeoperationsList()
  };

  ngOnInit(): void {
    this.employeeoperations = this.employeeoperationService.getEmployeeoperationsList();
  }

  reloadData() {
    this.employeeoperations = this.employeeoperationService.getEmployeeoperationsList();
  }

  updateEmployeeoperation(id: number){
      this.router.navigate(['employeeoperations', id]);
  }

  createEmployeeoperation(){
        this.router.navigate(['create-employeeoperation']);
  }

  deleteEmployeeoperation(id: number) {
    this.employeeoperationService.deleteEmployeeoperation(id)
    .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

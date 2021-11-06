import { Component, OnInit } from '@angular/core';
import { Employeeoperation } from '../../components/employeeoperation/employeeoperation';
import { EmployeeoperationService } from "../../components/employeeoperation/employeeoperation.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employeeoperation',
  templateUrl: './create-employeeoperation.component.html',
  styleUrls: ['./create-employeeoperation.component.scss']
})
export class CreateEmployeeoperationComponent implements OnInit {

 employeeoperation: Employeeoperation = new Employeeoperation();
   constructor(private employeeoperationService: EmployeeoperationService,
     private router: Router) { }

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

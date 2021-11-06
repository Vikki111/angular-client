import { Component, OnInit } from '@angular/core';
import { Department } from '../../components/department/department';
import { DepartmentService } from "../../components/department/department.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {

     id: number;
     department: Department = new Department();

     constructor(private departmentService: DepartmentService,
         private route: ActivatedRoute,
         private router: Router) { }

     ngOnInit() {
       this.department = new Department();

       this.id = this.route.snapshot.params['id'];

       this.departmentService.getDepartment(this.id)
         .subscribe(data => {
           console.log(data)
           this.department = data;
         }, error => console.log(error));
     }

     updateDepartment() {
       this.departmentService.updateDepartment(this.id, this.department)
         .subscribe(data => {
           console.log(data);
           this.department = new Department();
           this.gotoList();
         }, error => console.log(error));
     }

     onSubmit() {
       this.updateDepartment();
     }

     gotoList() {
       this.router.navigate(['departments']);
     }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DepartmentService } from "../../components/department/department.service";
import { Department } from '../../components/department/department';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

    departments: Observable<Department[]>;
    roles: string[] = [];
       isAdmin = false;

   constructor(private tokenStorageService: TokenStorageService,
   private departmentService: DepartmentService, private route: ActivatedRoute,
                                                             private router: Router) {
       this.departments = this.departmentService.getDepartmentsList()
   };

   ngOnInit(): void {
     this.departments = this.departmentService.getDepartmentsList();
     this.roles = this.tokenStorageService.getUser().roles;
         if(this.roles[0] == "ROLE_ADMIN") {
             this.isAdmin = true;
           }
   }

   reloadData() {
     this.departments = this.departmentService.getDepartmentsList();
   }

   updateDepartment(id: number){
       this.router.navigate(['departments', id]);
   }

   createDepartment(){
         this.router.navigate(['create-department']);
   }

   deleteDepartment(id: number) {
     this.departmentService.deleteDepartment(id)
     .subscribe(
             data => {
               console.log(data);
               this.reloadData();
             },
             error => console.log(error));
   }

   logout(): void {
     this.tokenStorageService.signOut();
     window.location.reload();
   }
}

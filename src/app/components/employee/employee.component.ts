import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeService } from "../../components/employee/employee.service";
import { Employee } from '../../components/employee/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-employee',
  templateUrl: '../../components/employee/employee.component.html',
  styleUrls: ['../../components/employee/employee.component.scss']
})
export class EmployeeComponent implements OnInit {
   employees: Observable<Employee[]>;
   roles: string[] = [];
      isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService,
  private employeeService: EmployeeService, private route: ActivatedRoute,
                                                            private router: Router) {
      this.employees = this.employeeService.getEmployeesList()
  };

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployeesList();
    this.roles = this.tokenStorageService.getUser().roles;
        if(this.roles[0] == "ROLE_ADMIN") {
            this.isAdmin = true;
          }
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  updateEmployee(id: number){
      this.router.navigate(['employees', id]);
  }

  createEmployee(){
        this.router.navigate(['create-employee']);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
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

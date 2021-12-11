import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { TypeoperationService } from "../../components/typeoperation/typeoperation.service";
import { Typeoperation } from '../../components/typeoperation/typeoperation';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-typeoperation',
  templateUrl: './typeoperation.component.html',
  styleUrls: ['./typeoperation.component.scss']
})
export class TypeoperationComponent implements OnInit {

  typeoperations: Observable<Typeoperation[]>;
  roles: string[] = [];
        isAdmin = false;

    constructor(private tokenStorageService: TokenStorageService,
    private typeoperationService: TypeoperationService, private route: ActivatedRoute,
                                                              private router: Router) {
        this.typeoperations = this.typeoperationService.getTypeoperationsList()
    };

    ngOnInit(): void {
      this.typeoperations = this.typeoperationService.getTypeoperationsList();
      this.roles = this.tokenStorageService.getUser().roles;
              if(this.roles[0] == "ROLE_ADMIN") {
                  this.isAdmin = true;
                }
    }

    reloadData() {
      this.typeoperations = this.typeoperationService.getTypeoperationsList();
    }

    updateTypeoperation(id: number){
        this.router.navigate(['typeoperations', id]);
    }

    createTypeoperation(){
          this.router.navigate(['create-typeoperation']);
    }

    deleteTypeoperation(id: number) {
      this.typeoperationService.deleteTypeoperation(id)
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

import { Component, OnInit } from '@angular/core';
import { Typeoperation } from '../../components/typeoperation/typeoperation';
import { TypeoperationService } from "../../components/typeoperation/typeoperation.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-typeoperation',
  templateUrl: './update-typeoperation.component.html',
  styleUrls: ['./update-typeoperation.component.scss']
})
export class UpdateTypeoperationComponent implements OnInit {

id: number;
   typeoperation: Typeoperation = new Typeoperation();

   constructor(private typeoperationService: TypeoperationService,
       private route: ActivatedRoute,
       private router: Router) { }

   ngOnInit() {
     this.typeoperation = new Typeoperation();

     this.id = this.route.snapshot.params['id'];

     this.typeoperationService.getTypeoperation(this.id)
       .subscribe(data => {
         console.log(data)
         this.typeoperation = data;
       }, error => console.log(error));
   }

   updateTypeoperation() {
     this.typeoperationService.updateTypeoperation(this.id, this.typeoperation)
       .subscribe(data => {
         console.log(data);
         this.typeoperation = new Typeoperation();
         this.gotoList();
       }, error => console.log(error));
   }

   onSubmit() {
     this.updateTypeoperation();
   }

   gotoList() {
     this.router.navigate(['typeoperations']);
   }
}

import { Component, OnInit } from '@angular/core';
import { Typeoperation } from '../../components/typeoperation/typeoperation';
import { TypeoperationService } from "../../components/typeoperation/typeoperation.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-typeoperation',
  templateUrl: './create-typeoperation.component.html',
  styleUrls: ['./create-typeoperation.component.scss']
})
export class CreateTypeoperationComponent implements OnInit {

 typeoperation: Typeoperation = new Typeoperation();
   constructor(private typeoperationService: TypeoperationService,
     private router: Router) { }

   ngOnInit(): void {
   }

   saveTypeoperation(){
     this.typeoperationService.createTypeoperation(this.typeoperation).subscribe( data =>{
       console.log(data);
       this.goToTypeoperationList();
     },
     error => console.log(error));
   }

   goToTypeoperationList(){
     this.router.navigate(['typeoperations']);
   }

   onSubmit(){
     console.log(this.typeoperation);
     this.saveTypeoperation();
   }
}

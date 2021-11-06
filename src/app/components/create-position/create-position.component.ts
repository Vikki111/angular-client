import { Component, OnInit } from '@angular/core';
import { Position } from '../../components/position/position';
import { PositionService } from "../../components/position/position.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.scss']
})
export class CreatePositionComponent implements OnInit {

 position: Position = new Position();
   constructor(private positionService: PositionService,
     private router: Router) { }

   ngOnInit(): void {
   }

   savePosition(){
     this.positionService.createPosition(this.position).subscribe( data =>{
       console.log(data);
       this.goToPositionList();
     },
     error => console.log(error));
   }

   goToPositionList(){
     this.router.navigate(['positions']);
   }

   onSubmit(){
     console.log(this.position);
     this.savePosition();
   }
}

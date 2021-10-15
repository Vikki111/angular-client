import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PositionService } from "../../components/position/position.service";
import { Position } from '../../components/position/position';

@Component({
  selector: 'app-position',
  templateUrl: '../../components/position/position.component.html',
  styleUrls: ['../../components/position/position.component.scss']
})
export class PositionComponent implements OnInit {
   positions: Observable<Position[]>;
//   positions: Position[] = [];

  constructor(private positionService: PositionService) {
      this.positions = this.positionService.getPositionsList()
  };

  ngOnInit(): void {
//     this.reloadData();
this.positions = this.positionService.getPositionsList();
this.positions.subscribe(partner => {
  console.log("! "+ partner);
});

console.log("!!! "+ this.positions);
//     this.positionService.getPositionsList().subscribe((positions: Position[]) => this.positions = positions);
  }

  reloadData() {
    this.positions = this.positionService.getPositionsList();
  }

  deletePosition(id: number) {
      this.positionService.deletePosition(id);
    }
}

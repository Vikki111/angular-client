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

  constructor(private positionService: PositionService) {
      this.positions = this.positionService.getPositionsList()
  };

  ngOnInit(): void {
    this.positions = this.positionService.getPositionsList();
  }

  reloadData() {
    this.positions = this.positionService.getPositionsList();
  }

  deletePosition(id: number) {
    this.positionService.deletePosition(id)
    .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
  }
}

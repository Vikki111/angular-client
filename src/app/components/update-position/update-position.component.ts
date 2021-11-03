import { Component, OnInit } from '@angular/core';
import { Position } from '../../components/position/position';
import { PositionService } from "../../components/position/position.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-position',
  templateUrl: '../../components/update-position/update-position.component.html',
  styleUrls: ['../../components/update-position/update-position.component.scss']
})
export class UpdatePositionComponent implements OnInit {

    id: number;
    position: Position;

    constructor(private route: ActivatedRoute,private router: Router,
      private positionService: PositionService) { }

    ngOnInit() {
      this.position = new Position();

      this.id = this.route.snapshot.params['id'];

      this.positionService.getPosition(this.id)
        .subscribe(data => {
          console.log(data)
          this.position = data;
        }, error => console.log(error));
    }

    updatePosition() {
      this.positionService.updatePosition(this.id, this.position)
        .subscribe(data => {
          console.log(data);
          this.position = new Position();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
      this.updatePosition();
    }

    gotoList() {
      this.router.navigate(['/positions']);
    }

}

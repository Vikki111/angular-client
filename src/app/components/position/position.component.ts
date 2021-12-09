import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PositionService } from "../../components/position/position.service";
import { Position } from '../../components/position/position';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-position',
  templateUrl: '../../components/position/position.component.html',
  styleUrls: ['../../components/position/position.component.scss']
})
export class PositionComponent implements OnInit {
   positions: Observable<Position[]>;

  constructor(private tokenStorageService: TokenStorageService,
  private positionService: PositionService, private route: ActivatedRoute,
                                                            private router: Router) {
      this.positions = this.positionService.getPositionsList()
  };

  ngOnInit(): void {
    this.positions = this.positionService.getPositionsList();
  }

  reloadData() {
    this.positions = this.positionService.getPositionsList();
  }

  updatePosition(id: number){
      this.router.navigate(['positions', id]);
  }

  createPosition(){
        this.router.navigate(['create-position']);
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

  logout(): void {
       this.tokenStorageService.signOut();
       window.location.reload();
     }
}

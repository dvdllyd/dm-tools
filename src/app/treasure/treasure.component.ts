import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class TreasureComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }

  getTreasure() {
    this.genService.getRandomTreasure()
  }

}

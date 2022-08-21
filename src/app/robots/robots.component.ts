import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }

  getCyborg() {
    this.genService.getRandomCyborg()
  }

  getMorph() {
    this.genService.getRandomMorph
  }
}

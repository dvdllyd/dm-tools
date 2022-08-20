import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-carousing',
  templateUrl: './carousing.component.html',
  styleUrls: ['./carousing.component.css']
})
export class CarousingComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }

  getCarouse() {
    this.genService.getRandomCarouse
  }

}

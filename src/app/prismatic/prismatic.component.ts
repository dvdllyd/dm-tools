import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';


@Component({
  selector: 'app-prismatic',
  templateUrl: './prismatic.component.html',
  styleUrls: ['./prismatic.component.css']
})
export class PrismaticComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }

  getPrismatic() {
    this.genService.getRandomPrismatic()
  }

  getCurse() {
    this.genService.getRandomCurse()
  }

}

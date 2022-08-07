import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-polymorph',
  templateUrl: './polymorph.component.html',
  styleUrls: ['./polymorph.component.css']
})
export class PolymorphComponent implements OnInit {

  constructor(
    private genService:GeneratorService

  ) { }

  ngOnInit(): void {
  }

  getPolytype() {
    this.genService.getRandomPolytype()
  }

  getCreature() {
    this.genService.getRandomCreature()
  }

  getElement() {
    this.genService.getRandomElement()
  }

  getItem() {
    this.genService.getRandomItem()
  }

}

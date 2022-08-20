import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-grw',
  templateUrl: './grw.component.html',
  styleUrls: ['./grw.component.css']
})
export class GrwComponent implements OnInit {

  constructor(
    private genService:GeneratorService
  ) { }

  ngOnInit(): void {
  }

  getGrwchart() {
    this.genService.getRandomGrwchart()
  }

  getComchart() {
    this.genService.getRandomComchart()
  }

  getUncomchart() {
    this.genService.getRandomUncomchart()
  }

  getRarechart() {
    this.genService.getRandomRarechart()
  }

  getGate() {
    this.genService.getRandomGate()
  }
}

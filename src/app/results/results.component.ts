import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  treasureSub: Subscription
  treasure

  grwchartSub: Subscription
  grwchart

  comchartSub: Subscription
  comchart

  uncomchartSub: Subscription
  uncomchart

  rarechartSub: Subscription
  rarechart


  constructor(private gService: GeneratorService) {}




  ngOnInit(): void {
    this.treasureSub = this.gService.treasure.subscribe((treasure) => {this.treasure = treasure})
    this.grwchartSub = this.gService.grwchart.subscribe((grwchart) => {this.grwchart = grwchart})
    this.comchartSub = this.gService.comchart.subscribe((comchart) => {this.comchart = comchart})
    this.uncomchartSub = this.gService.uncomchart.subscribe((uncomchart) => {this.uncomchart = uncomchart})
    this.rarechartSub = this.gService.rarechart.subscribe((rarechart) => {this.rarechart = rarechart})
  }



  ngOnDestroy(): void {
    this.treasureSub.unsubscribe()
    this.grwchartSub.unsubscribe()
    this.comchartSub.unsubscribe()
    this.uncomchartSub.unsubscribe()
    this.rarechartSub.unsubscribe()
  }

}

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

  gateSub: Subscription
  gate

  comchartSub: Subscription
  comchart

  uncomchartSub: Subscription
  uncomchart

  rarechartSub: Subscription
  rarechart

  polytypeSub: Subscription
  polytype

  creatureSub: Subscription
  creature

  elementSub: Subscription
  element

  itemSub: Subscription
  item

  prismaticSub: Subscription
  prismatic

  satechSub: Subscription
  satech

  carouseSub: Subscription
  carouse

  curseSub: Subscription
  curse

  constructor(private gService: GeneratorService) {}




  ngOnInit(): void {
    this.treasureSub = this.gService.treasure.subscribe((treasure) => {this.treasure = treasure})
    this.grwchartSub = this.gService.grwchart.subscribe((grwchart) => {this.grwchart = grwchart})
    this.comchartSub = this.gService.comchart.subscribe((comchart) => {this.comchart = comchart})
    this.uncomchartSub = this.gService.uncomchart.subscribe((uncomchart) => {this.uncomchart = uncomchart})
    this.rarechartSub = this.gService.rarechart.subscribe((rarechart) => {this.rarechart = rarechart})
    this.polytypeSub = this.gService.polytype.subscribe((polytype) => {this.polytype = polytype})
    this.creatureSub = this.gService.creature.subscribe((creature) => {this.creature = creature})
    this.elementSub = this.gService.element.subscribe((element) => {this.element = element})
    this.itemSub = this.gService.item.subscribe((item) => {this.item = item})
    this.prismaticSub = this.gService.prismatic.subscribe((prismatic) => {this.prismatic = prismatic})
    this.satechSub = this.gService.satech.subscribe((satech) => {this.satech = satech})
    this.carouseSub = this.gService.carouse.subscribe((carouse) => {this.carouse = carouse})
    this.curseSub = this.gService.curse.subscribe((curse) => {this.curse =curse})
    this.gateSub = this.gService.gate.subscribe((gate) =>{this.gate = gate})
  }



  ngOnDestroy(): void {
    this.treasureSub.unsubscribe()
    this.grwchartSub.unsubscribe()
    this.comchartSub.unsubscribe()
    this.uncomchartSub.unsubscribe()
    this.rarechartSub.unsubscribe()
    this.polytypeSub.unsubscribe()
    this.creatureSub.unsubscribe()
    this.elementSub.unsubscribe()
    this.itemSub.unsubscribe()
    this.prismaticSub.unsubscribe()
    this.satechSub.unsubscribe()
    this.carouseSub.unsubscribe()
    this.curseSub.unsubscribe()
    this.gateSub.unsubscribe()
  }

}

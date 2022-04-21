import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  treasures: string[]= [
    'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing',
    'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing',
    'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins',
    'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins', 'Coins',
    'Lotus Powder',
    'Space Alien Tech', 'Space Alien Tech',
    'Magic Item', 'Magic Item',
    'Weird Alien Tech',
    'Spellbook'  ]
    treasure = new Subject


  constructor() {}

  getRandomTreasure() {
    const randomTreasure = this.treasures[Math.floor(Math.random()*this.treasures.length)]
    this.treasure.next(randomTreasure)
  }


}

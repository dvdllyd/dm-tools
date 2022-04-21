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


  constructor(private gService: GeneratorService) {}




  ngOnInit(): void {
    this.treasureSub = this.gService.treasure.subscribe((treasure) => {this.treasure = treasure})
  }

  ngOnDestroy(): void {
    this.treasureSub.unsubscribe()
  }

}

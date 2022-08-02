import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TreasureComponent } from './treasure/treasure.component';
import { EncountersComponent } from './encounters/encounters.component';
import { MutationsComponent } from './mutations/mutations.component';
import { WildSurgesComponent } from './wild-surges/wild-surges.component';
import { ResultsComponent } from './results/results.component';
import { CarousingComponent } from './carousing/carousing.component';
import { GrwComponent } from './grw/grw.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreasureComponent,
    EncountersComponent,
    MutationsComponent,
    WildSurgesComponent,
    ResultsComponent,
    CarousingComponent,
    GrwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

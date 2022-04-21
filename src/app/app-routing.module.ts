import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarousingComponent } from './carousing/carousing.component';
import { EncountersComponent } from './encounters/encounters.component';
import { MutationsComponent } from './mutations/mutations.component';
import { TreasureComponent } from './treasure/treasure.component';
import { WildSurgesComponent } from './wild-surges/wild-surges.component';

const routes: Routes = [
  {path: 'carousing', component:CarousingComponent},
  {path: 'encounters', component:EncountersComponent},
  {path: 'mutations', component:MutationsComponent},
  {path: 'treasure', component:TreasureComponent},
  {path: 'wild-surges', component:WildSurgesComponent},
  {path: '' , redirectTo: "treasure", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

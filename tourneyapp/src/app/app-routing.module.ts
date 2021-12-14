import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourneysListComponent } from './components/tourneys-list/tourneys-list.component';
import { AddTourneyComponent } from './components/add-tourney/add-tourney.component';
import { TourneyDetailComponent } from './components/tourney-detail/tourney-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-tourney' },
  { path: 'tourneys-list', component: TourneysListComponent },
  { path: 'add-tourney', component: AddTourneyComponent },
  { path: 'edit-tourney/:id', component: TourneyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

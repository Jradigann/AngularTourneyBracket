import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTourneyComponent } from './components/add-tourney/add-tourney.component';
import { TourneyDetailComponent } from './components/tourney-detail/tourney-detail.component';
import { TourneysListComponent } from './components/tourneys-list/tourneys-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTourneyComponent,
    TourneyDetailComponent,
    TourneysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

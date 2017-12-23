import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimerComponent } from './dashboard/timer/timer.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StageComponent } from './event/stage/stage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimerComponent,
    AboutComponent,
    EventComponent,
    TeamComponent,
    HeaderComponent,
    CarouselComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
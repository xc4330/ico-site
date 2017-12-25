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
import { ProblemComponent } from './problem/problem.component';
import { BubbleComponent } from './shared/bubble/bubble.component';
import { SolutionComponent } from './solution/solution.component';
import { FooterComponent } from './footer/footer.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { PhaseComponent } from './roadmap/phase/phase.component';
import { MemberComponent } from './team/member/member.component';
import { BenefitsComponent } from './benefits/benefits.component';


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
    StageComponent,
    ProblemComponent,
    BubbleComponent,
    SolutionComponent,
    FooterComponent,
    RoadmapComponent,
    PhaseComponent,
    MemberComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

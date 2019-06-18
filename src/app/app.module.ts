import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { EarthComponent } from './earth/earth.component';
import { ChoiceComponent } from './choice/choice.component';
import { QuizComponent } from './quiz/quiz.component';
import { SummaryComponent } from './summary/summary.component';
import { QuestionComponent } from './question/question.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'favorites', component: FavoritesComponent},
  {path: 'quiz', component: QuizComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    FavoritesComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    EarthComponent,
    ChoiceComponent,
    QuizComponent,
    SummaryComponent,
    QuestionComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DatabindExerciseComponent } from './databind-exercise/databind-exercise.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesExerciseComponent } from './directives-exercise/directives-exercise.component';
import { NgclassExerciseComponent } from './ngclass-exercise/ngclass-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DatabindExerciseComponent,
    CounterComponent,
    DirectivesExerciseComponent,
    NgclassExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

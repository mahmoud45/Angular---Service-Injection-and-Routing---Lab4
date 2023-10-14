import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { CoursesComponent } from './components/sections/courses/courses.component';
import { CourseDetailsComponent } from './components/sections/courses/course-details/course-details.component';
import { HomeComponent } from './components/home/home.component';
import { CourseFormComponent } from './components/sections/courses/course-form/course-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CoursesComponent,
    CourseDetailsComponent,
    HomeComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

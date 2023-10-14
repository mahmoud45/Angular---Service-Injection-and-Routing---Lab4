import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './components/sections/courses/course-details/course-details.component';
import { HomeComponent } from './components/home/home.component';
import { CourseFormComponent } from './components/sections/courses/course-form/course-form.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'courses', component: HomeComponent},
    {path: 'courses/:id', component: CourseDetailsComponent},
    {path: 'create-course', component: CourseFormComponent},
    {path: 'edit-course/:id', component: CourseFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', // Add options right here
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

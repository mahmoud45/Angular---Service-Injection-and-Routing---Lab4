import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/models/icourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    courses: ICourse[] = [];
    constructor(public courseService: CourseService, public router: Router){

    }

    ngOnInit(): void {
        this.courses = this.courseService.GetAll();
    }

    deleteCourse(courseId: number | undefined){
        if(courseId !== undefined){
            this.courseService.delete(courseId);
            this.courses = this.courseService.GetAll();
        }
    }
}

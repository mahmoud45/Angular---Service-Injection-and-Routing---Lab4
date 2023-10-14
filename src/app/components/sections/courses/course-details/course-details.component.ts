import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICourse } from 'src/app/models/icourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
    courseId: number = -1;
    course: ICourse | undefined;
    constructor(public courseService: CourseService, public activatedRout: ActivatedRoute){}

    ngOnInit(): void {
        this.courseId = this.activatedRout.snapshot.params['id'];
        this.course = this.courseService.GetById(this.courseId);
    }


}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/models/icourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    name: any = '';
    desc: any = '';
    price: any = 0;

    editCourseId: number | undefined;

    course: ICourse | undefined;

    constructor(public courseService: CourseService, public activatdRoute:ActivatedRoute, public router: Router){}
    ngOnInit(): void {
        this.editCourseId = this.activatdRoute.snapshot.params['id'];

        if(this.editCourseId !== undefined){
            this.course = this.courseService.GetById(this.editCourseId);

            this.name = this.course?.Name;
            this.desc = this.course?.Description;
            this.price = this.course?.Price;

        }
    }

    createCourse(e: any){
        e.preventDefault();

        let newCourse: ICourse = {
            Id: this.courseService.GetAll().length+1,
            Name: this.name,
            Description: this.desc,
            Price: this.price,
            ImageURL: "assets/Images/1.jpg",
            isDeleted: false
        }

        if(this.editCourseId !== undefined){
            this.courseService.update(newCourse, this.editCourseId);
            return this.router.navigate(['/courses']);
        }

        this.courseService.Create(newCourse);

        return this.router.navigate(['/courses']);
    }
}

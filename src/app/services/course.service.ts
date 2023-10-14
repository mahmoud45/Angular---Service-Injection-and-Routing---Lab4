import { Injectable } from '@angular/core';
import { courseList } from '../models/CourseList';
import { ICourse } from '../models/icourse';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor() { }

    GetAll(): ICourse[]{
        return courseList.filter((course) => course.isDeleted == false);
    }

    GetById(id: number): ICourse | undefined{
        return courseList.find((course) => course.Id == id);
    }

    Create(course:ICourse){
        courseList.push(course);
    }

    update(newCourse:ICourse, id:number){
        courseList.find((course) => {
            if(course.Id == id){

                course.Name = newCourse.Name
                course.Description = newCourse.Description
                course.Price = newCourse.Price
            }
        });
    }

    delete(courseId: number){
        courseList.find((course) => {
            if(course.Id == courseId){
                course.isDeleted = true;
            }
        });
    }

}

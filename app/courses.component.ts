import { Component } from 'angular2/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'
import { StarFavouriteDirective } from './star-favourite.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
            {{title}}    
        <input type="text" autoGrow/>
        <i class="glyphicon" starFavourite></i>
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective, StarFavouriteDirective]
})
export class CoursesComponent {
    // Instance Vars
   title: string = "The title of courses page";
   courses;

    // variable_name: TypeName
   constructor(courseService: CourseService) {
       this.courses = courseService.getCourses()
   }
}
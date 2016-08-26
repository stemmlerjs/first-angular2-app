import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component'

// We include other components by adding them to the directives attribute
@Component({
    selector: 'my-app',
    template: `
          <div *ngIf="courses.length > 0">
            List of courses
          </div>
          <div [hidden]="courses.length != 0">
            You don't have any courses yet.
          </div>

          <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
          </ul>
          <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
          </div>

          <h3>ngFor example</h3>
          <p>Notice that *ngFor uses the asterisk because the * denotes that the current host element is a template. See the next part.</p>
          <ul>
            <li *ngFor="#course of courses, #i = index">
              {{ i + 1}} - {{course | uppercase}}
            </li>
          </ul>

          <h3>Doing ngFor without the * using raw remplates</h3>
          <template ngFor [ngForOf]="courses" #course #i=index>
            <li>{{ i + 1}} - {{course}}</li>
          </template>
                `
    ,
    directives: [CoursesComponent] 
})

export class AppComponent {
    courses = ['Course 1','Course 2','Course 3',];

    viewMode = 'map'
 }
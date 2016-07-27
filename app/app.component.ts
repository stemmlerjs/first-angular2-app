import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'

// We include other components by adding them to the directives attribute
@Component({
    selector: 'my-app',
    template: `<h1>Yo, this is a typescript app</h1>
                <courses></courses>
                <authors></authors>
                `
    ,
    directives: [CoursesComponent, AuthorsComponent] 
})

export class AppComponent { }
import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'
import { StarFavouriteComponent } from './starFavourite.component'
import { HeartComponent } from './heart.component'
import { VoteComponent } from './vote.component'

// We include other components by adding them to the directives attribute
@Component({
    selector: 'my-app',
    template: `<h1>Yo, this is a typescript app</h1>
                <courses></courses>
                <authors></authors>
                <star 
                    [is-favourite]="post.isFavourited"
                    (change)="onFavouriteChange($event)">
                </star>
                <heart></heart>
                <vote [voteCount]="10" [myVote]="0" (vote)="onVote($event)"></vote>
                `
    ,
    directives: [CoursesComponent, AuthorsComponent, StarFavouriteComponent, HeartComponent, VoteComponent] 
})

export class AppComponent {
    post = {
        title: "sometitle",
        isFavourited: true
    }

    onFavouriteChange($event) {
        console.log($event.newValue)
    }

    onVote($event) {
        console.log("My vote value was: " + $event.value)
    }
 }
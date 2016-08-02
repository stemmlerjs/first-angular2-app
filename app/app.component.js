System.register(['angular2/core', './courses.component', './authors.component', './starFavourite.component', './heart.component', './vote.component', './tweets/tweetslist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, starFavourite_component_1, heart_component_1, vote_component_1, tweetslist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (starFavourite_component_1_1) {
                starFavourite_component_1 = starFavourite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweetslist_component_1_1) {
                tweetslist_component_1 = tweetslist_component_1_1;
            }],
        execute: function() {
            // We include other components by adding them to the directives attribute
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "sometitle",
                        isFavourited: true
                    };
                }
                AppComponent.prototype.onFavouriteChange = function ($event) {
                    console.log($event.newValue);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log("My vote value was: " + $event.value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Yo, this is a typescript app</h1>\n                <courses></courses>\n                <authors></authors>\n                <star \n                    [is-favourite]=\"post.isFavourited\"\n                    (change)=\"onFavouriteChange($event)\">\n                </star>\n                <heart></heart>\n                <vote [voteCount]=\"10\" [myVote]=\"0\" (vote)=\"onVote($event)\"></vote>\n                <tweetslist></tweetslist>\n                ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,
                            starFavourite_component_1.StarFavouriteComponent, heart_component_1.HeartComponent, vote_component_1.VoteComponent, tweetslist_component_1.TweetslistComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
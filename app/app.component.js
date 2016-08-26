System.register(['angular2/core', './courses.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            }],
        execute: function() {
            // We include other components by adding them to the directives attribute
            AppComponent = (function () {
                function AppComponent() {
                    this.courses = ['Course 1', 'Course 2', 'Course 3',];
                    this.viewMode = 'map';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n          <div *ngIf=\"courses.length > 0\">\n            List of courses\n          </div>\n          <div [hidden]=\"courses.length != 0\">\n            You don't have any courses yet.\n          </div>\n\n          <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode = 'list'\">List View</a></li>\n          </ul>\n          <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault>Map View Content</template>\n            <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n          </div>\n\n          <h3>ngFor example</h3>\n          <p>Notice that *ngFor uses the asterisk because the * denotes that the current host element is a template. See the next part.</p>\n          <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n              {{ i + 1}} - {{course | uppercase}}\n            </li>\n          </ul>\n\n          <h3>Doing ngFor without the * using raw remplates</h3>\n          <template ngFor [ngForOf]=\"courses\" #course #i=index>\n            <li>{{ i + 1}} - {{course}}</li>\n          </template>\n                ",
                        directives: [courses_component_1.CoursesComponent]
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
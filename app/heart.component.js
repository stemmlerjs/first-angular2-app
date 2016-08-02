System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.isHearted = true;
                    this.totalLikes = 10;
                }
                HeartComponent.prototype.toggle = function () {
                    if (this.isHearted) {
                        this.totalLikes--;
                    }
                    else {
                        this.totalLikes++;
                    }
                    this.isHearted = !this.isHearted;
                };
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        template: "<i class=\"glyphicon\" (click)=\"toggle()\" [class.glyphicon-heart]=\"isHearted\" [class.glyphicon-heart-empty]=\"!isHearted\"></i>\n               <span>{{totalLikes}}</span>\n    ",
                        styles: ["\n        .glyphicon {\n            font-size: 20px;\n        }\n\n        .glyphicon-heart {\n            cursor:pointer;\n            color: pink;\n        }\n\n        .glyphicon-heart-empty {\n            cursor:pointer;\n            color: #CCC;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map
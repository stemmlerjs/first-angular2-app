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
    var StarFavouriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarFavouriteComponent = (function () {
                function StarFavouriteComponent() {
                    // Input properties. @Input('publicName') privateName.
                    this.isFavourited = true;
                    // @Overrides the default 'change' method for this component.
                    this.change = new core_1.EventEmitter();
                }
                StarFavouriteComponent.prototype.toggle = function () {
                    this.isFavourited = !this.isFavourited;
                    this.change.emit({
                        newValue: this.isFavourited
                    });
                };
                __decorate([
                    core_1.Input('is-favourite'), 
                    __metadata('design:type', Object)
                ], StarFavouriteComponent.prototype, "isFavourited", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StarFavouriteComponent.prototype, "change", void 0);
                StarFavouriteComponent = __decorate([
                    core_1.Component({
                        selector: 'star',
                        templateUrl: 'app/starFavourite.template.html',
                        styles: ["\n        .glyphicon-star {\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarFavouriteComponent);
                return StarFavouriteComponent;
            }());
            exports_1("StarFavouriteComponent", StarFavouriteComponent);
        }
    }
});
//# sourceMappingURL=starFavourite.component.js.map
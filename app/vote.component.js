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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    // We should always initialize our properties here in case the user for 
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.voteUp = function () {
                    if (this.myVote != 1) {
                        this.voteCount++;
                    }
                    this.myVote = this.myVote < 1 ? this.myVote + 1 : this.myVote;
                    this.vote.emit({
                        value: this.myVote
                    });
                };
                VoteComponent.prototype.voteDown = function () {
                    if (this.myVote != -1) {
                        this.voteCount--;
                    }
                    this.myVote = this.myVote > -1 ? this.myVote - 1 : this.myVote;
                    this.vote.emit({
                        value: this.myVote
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "<div class=\"voteContainer\">\n                 <i class=\"glyphicon glyphicon-menu-up\" (click)=\"voteUp()\" [class.selected]=\"myVote === 1\"></i>\n                 <span>{{voteCount}}</span>\n                 <i class=\"glyphicon glyphicon-menu-down\" (click)=\"voteDown()\" [class.selected]=\"myVote === -1\"></i>\n               </div>\n    ",
                        styles: ["\n      .voteContainer {\n        width: 20px;\n      }\n\n      .glyphicon {\n        cursor: pointer;\n      }\n\n      .selected {\n        color: orange;\n      }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map
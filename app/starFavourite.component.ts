import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: 'app/starFavourite.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})

export class StarFavouriteComponent {
    // Input properties. @Input('publicName') privateName.
    @Input('is-favourite') isFavourited = true;

    // @Overrides the default 'change' method for this component.
    @Output() change = new EventEmitter();

    toggle() {
        this.isFavourited = !this.isFavourited;
        this.change.emit({
            newValue: this.isFavourited
        });
    }

}
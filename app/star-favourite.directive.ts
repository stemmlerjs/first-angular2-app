import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[starFavourite]',
    host: {
        '(click)': 'toggleFavourite()'
    }
})

export class StarFavouriteDirective {
    isStarred:boolean = false;

    constructor(private el:ElementRef, private renderer: Renderer){
        this.renderer.setElementClass(this.el.nativeElement, 'glypicon', true)
    }

    toggleFavourite() {
        if(this.isStarred) {
            this.isStarred = false;
            this.renderer.setElementClass(this.el.nativeElement, 'glypicon-star', false)
            this.renderer.setElementClass(this.el.nativeElement, 'glypicon-star-empty', true)
        } else {
            this.isStarred = true;
            this.renderer.setElementClass(this.el.nativeElement, 'glypicon-star', true)
            this.renderer.setElementClass(this.el.nativeElement, 'glypicon-star-empty', false)
        }
    }
}
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',  // square brackets refers to an attribute (property-binding)
    host: {                  // We can specify the actions for this element
        '(focus)': 'onFocus()', // on focus, execute the onFocus() method
        '(blur)': 'onBlur()'
    }
})

// To write code for the Host element, we need to import 2 services from Angular
// ElementRef - gives us access to the host element
// Renderer - service used to modify an element
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        // Dependency Injection, angular injects instances of ELementRef and Renderer
    }

    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px')
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px')
    }
}
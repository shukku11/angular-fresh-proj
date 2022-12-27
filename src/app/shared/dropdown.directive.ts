import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() setStyleCustom: string = '';

  @HostBinding('class.open') isOpen = false;

  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }

  ngOnInit(): void {
    //this.renderer.removeClass(this.elemRef.nativeElement, 'open')
  }

  @HostListener('click') clickdropdown(eventData: Event) {
    //way - 1 
    // if (this.elemRef.nativeElement.classList.contains('open')) {
    //   this.renderer.removeClass(this.elemRef.nativeElement, 'open')
    // } else {
    //   this.renderer.addClass(this.elemRef.nativeElement, 'open')
    // }

    //way - 2 
    this.isOpen = !this.isOpen;
  }
}
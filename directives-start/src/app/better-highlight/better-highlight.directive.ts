import { Directive,
  OnInit,
  ElementRef,
  RendererV2,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding ('style.backgroundColor') backgroundColor: string; 'transparent';

  constructor(private elRef: ElementRef, private renderer: RendererV2) {}

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);//
  }
  @HostListener('mouseover') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);//
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);//
    this.backgroundColor = 'transparent';
  }
}

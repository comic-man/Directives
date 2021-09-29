import { Directive, OnInit, ElementRef, RendererV2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElemenentRef, private renderer: RendererV2) {}

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);//
  }
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
  }
}

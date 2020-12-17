import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Directive({
  selector: "[collapse]"
})
export class CollapseDirective implements OnChanges {
  @Input() collapse: boolean;
  element: HTMLElement;
  timeoutId: number;

  constructor(public el: ElementRef, public zone: NgZone) {
    this.element = el.nativeElement;

  }

  public ngOnChanges({collapse}: SimpleChanges): void {
    this.zone.runOutsideAngular(() => {      
      if (collapse.currentValue) {
        if (collapse.isFirstChange()) {
          this.element.style.height = '0';
        } else {
          clearTimeout(this.timeoutId);
          this.element.style.height = `${this.element.scrollHeight}px`;
          requestAnimationFrame(() => this.element.style.height = '0');
        }
      } else {
        this.element.style.height = `${this.element.scrollHeight}px`;
        this.timeoutId = setTimeout(() => this.element.removeAttribute('style'), 500);
      }
      this.element.setAttribute('aria-expanded', `${!this.collapse}`);
    });
  }  
}

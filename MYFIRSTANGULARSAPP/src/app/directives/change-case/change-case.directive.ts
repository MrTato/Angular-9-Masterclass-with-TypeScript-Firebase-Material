import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appChangeCase]',
})
export class ChangeCaseDirective {
  @Input('appChangeCase') case: string;

  @HostListener('blur') onblur() {
    let changedValue: string =
      this.case === 'upper'
        ? this.elRef.nativeElement.value.toUpperCase()
        : this.elRef.nativeElement.value.toLowerCase();
    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
    // this.elRef.nativeElement.value = this.elRef.nativeElement.value.toLowerCase();
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.elRef.nativeElement.value);
  }
}

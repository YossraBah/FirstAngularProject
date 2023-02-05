import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.background='#ff4081'
    el.nativeElement.style.border="6px solid ff4081"
    el.nativeElement.style.color="white"
    el.nativeElement.style.padding="5px"
  }

}

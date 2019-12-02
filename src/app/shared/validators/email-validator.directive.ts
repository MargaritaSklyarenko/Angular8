import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first} from 'rxjs/operators';

@Directive({
  selector: '[appEmailValidator][formControlName], [appEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailValidatorDirective, 
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(c: AbstractControl): Promise<{ [key: string]: any}>|Observable < {[key: string]: any}> {
    return this.validateEmailObservable(c.value)
     .pipe(
       debounceTime(1000),
       distinctUntilChanged(),
       first()
     );
  }

  private validateEmailObservable(email: string) {
    return new Observable(observer => {
      if (email === 'exists@example.com') {
        console.log("exists!!");
        observer.next({asyncEmailExist: true});
      } else {
        observer.next(null);
      }
    });
  }
}

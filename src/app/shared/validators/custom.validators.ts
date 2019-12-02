import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static checkLength(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && c.value.length > min && c.value.length < max) {
        return null
      }
      return {
        wrongLength: true
      };
    }
  }
}
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidations {
  static unique(control: AbstractControl): ValidationErrors | null {
    return control.value === 'kold' ? { unique: true } : null;
  }
}

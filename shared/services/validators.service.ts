import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {


  validatorarequal(form: any) {
    if (form.value.email && form.value.altermail) {
      return form.value.email !== form.value.altermail
        ? null : form.get('altermail').setErrors({ mismatch: true });

    }

    return null;
  }

}

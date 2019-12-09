import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './../../shared/validators';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  orderForm: FormGroup;
  rMin = 3;
  rMax = 20;

  placeholder = {
    firstName: 'First Name (required)',
    lastName: 'Last Name',
    phone: 'Phone',
    email: 'Email (required)',
  };

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  onAddPhoneNumber(): void {
    this.phones.push(this.buildPhoneNumbers());
  }

  onRemovePhoneNumber(index: number): void {
    this.phones.removeAt(index);
  }

  onSave() {
    console.log(this.orderForm);
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
  }

  private buildPhoneNumbers(): FormGroup {
    return this.formBuiler.group({phoneNumber: ''});
  }

  private buildForm() {
    this.orderForm = this.formBuiler.group({
      firstName: new FormControl('', {
        validators: [
          Validators.required,
          CustomValidators.checkLength(this.rMin, this.rMax)
        ]
      }),
      lastName: '',
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
          Validators.email
        ]
      ],
      phones: this.formBuiler.array([this.buildPhoneNumbers()]),
      pickup: false,
      address: ''
    });
  }
}

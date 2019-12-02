import { Component, OnInit } from '@angular/core';
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

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.orderForm = this.formBuiler.group({
      firstName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
        updateOn: 'blur'
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

    console.log(this.orderForm);
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  onAddPhoneNumber(): void {
    this.phones.push(this.buildPhoneNumbers());
  }

  private buildPhoneNumbers(): FormGroup {
    return this.formBuiler.group({phoneNumber: ''});
  }

  onRemovePhoneNumber(index: number): void {
    this.phones.removeAt(index);
  }

  onSave() {
    console.log(this.orderForm);
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);
  }
}

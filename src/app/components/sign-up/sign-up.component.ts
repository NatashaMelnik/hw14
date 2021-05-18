import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {
  fullNameControl: FormGroup;
  validStatus = '';
  conditionPopup = false;
  conditionOfSuccess = false;
  conditionNotAllFields = false;
  endOfReg = false;

  constructor() {
    this.fullNameControl = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚА-Яа-яІЇЄіїєҐґ]+$'),
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.minLength(2),
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚА-Яа-яІЇЄіїєҐґ]+$'),
      ]),
      mail: new FormControl('', [
        Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/),
      ]),
      phoneNumber: new FormControl('', [
        Validators.minLength(9),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]+$'),
      ]),
      password: new FormControl('', [Validators.minLength(3)]),
    });
    this.fullNameControl.statusChanges.subscribe((status) => {
      this.validStatus = status;
    });
  }

  signUpClick(): void {
    if (this.validStatus === 'VALID' && this.checkEmptyFields()) {
      this.conditionOfSuccess = true;
      this.conditionPopup = false;
      this.showPopup();
      this.endOfReg = true;
    }
  }

  checkEmptyFields(): boolean {
    if (
      this.fullNameControl.value.firstName.length !== 0 &&
      this.fullNameControl.value.lastName.length !== 0 &&
      this.fullNameControl.value.mail.length !== 0 &&
      this.fullNameControl.value.phoneNumber.length !== 0 &&
      this.fullNameControl.value.password.length !== 0
    ) {
      this.conditionOfSuccess = true;
      this.conditionNotAllFields = false;
      return true;
    } else {
      this.conditionNotAllFields = true;
      this.showPopup();
      return false;
    }
  }

  showPopup(): void {
    this.conditionPopup = true;
  }

  closePopup(): void {
    this.conditionPopup = false;
    this.conditionOfSuccess = false;
    if (this.endOfReg) {
      this.fullNameControl.reset();
    }
  }

  ngOnInit(): void {}
}

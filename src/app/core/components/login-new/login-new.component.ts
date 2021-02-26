import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PasswordValidation } from 'src/app/shared/validators/password.validator';
import { Output, EventEmitter } from '@angular/core';
import { FirebaseDatabaseService } from 'src/app/services/firebase-database.service';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css'],
})
export class LoginNewComponent implements OnInit {
  passwordValidation = PasswordValidation;
  @Output() selectedIndexEmitter = new EventEmitter<number>();

  constructor(
    public formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  hide = true;
  registrationForm = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(150)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      passwordConfirmation: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
    },
    {
      validator: this.passwordValidation('password', 'passwordConfirmation'),
    }
  );

  ngOnInit(): void {}

  emitSelectedIndex() {
    this.selectedIndexEmitter.emit(0);
  }

  clearForm() {
    this.registrationForm.reset();
    Object.keys(this.registrationForm.controls).forEach((key) => {
      this.registrationForm.controls[key].setErrors(null);
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.firebaseService
        .signup(
          this.registrationForm.get('email')?.value,
          this.registrationForm.get('password')?.value,
          this.registrationForm.get('name')?.value
        )
        .then(() => {
          this.clearForm();
          this.emitSelectedIndex();
          alert('Usuário cadastrado com sucesso!');
        })
        .catch((e) => {
          alert(e.message);
        });
    } else {
      alert('Preencha todos campos corretamente!');
    }
  }
}

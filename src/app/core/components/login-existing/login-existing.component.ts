import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseDatabaseService } from 'src/app/services/firebase-database.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login-existing',
  templateUrl: './login-existing.component.html',
  styleUrls: ['./login-existing.component.css'],
})
export class LoginExistingComponent implements OnInit {
  hide = true;

  constructor(
    public formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router,
    private firebaseDatabaseService: FirebaseDatabaseService
  ) {}

  loginFrom = this.formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(150)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(50)],
    ],
  });

  onSubmit() {
    if (this.loginFrom.valid) {
      this.firebaseService.signin(
        this.loginFrom.get('email')?.value,
        this.loginFrom.get('password')?.value,
        () => {
          this.router.navigateByUrl('auth');
        }
      );
    }
  }

  ngOnInit(): void {}
}

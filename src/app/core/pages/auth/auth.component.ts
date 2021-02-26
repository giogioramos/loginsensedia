import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/services/authenticator.service';
import { ASCII, QRCODE } from 'src/app/shared/consts/auth.const';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authenticatorService: AuthenticatorService
  ) {}

  qrcode = QRCODE;
  ascii = ASCII;

  ngOnInit(): void {}

  sendCode(code: string, ascii: string) {
    const body = new HttpParams().set('code', code).set('ascii', ascii);

    return this.httpClient
      .post('http://localhost:3000/sendcode', body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      })
      .subscribe((res) => {
        if (res) {
          this.authenticatorService.authenticated = true;
          this.router.navigateByUrl('dashboard');
        } else {
          alert('Código de autenticação incorreto');
          this.authenticatorService.authenticated = false;
        }
      });
  }
}

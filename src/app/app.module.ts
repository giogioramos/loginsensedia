import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/pages/login/login.component';
import { LoginNewComponent } from './core/components/login-new/login-new.component';
import { LoginExistingComponent } from './core/components/login-existing/login-existing.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './core/pages/dashboard/dashboard/dashboard.component';
import { FirebaseService } from './services/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './core/pages/auth/auth.component';
import { AuthenticatorService } from './services/authenticator.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginNewComponent,
    LoginExistingComponent,
    DashboardComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAa01jOP3Pto6EzSA55g7i--C4t_6rFr0A',
      authDomain: 'sensedia-login.firebaseapp.com',
      projectId: 'sensedia-login',
      storageBucket: 'sensedia-login.appspot.com',
      messagingSenderId: '409866214246',
      appId: '1:409866214246:web:3930832b09b3ecb4c7c6a7',
    }),
    AngularFireDatabaseModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [FirebaseService, UserService, AuthenticatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

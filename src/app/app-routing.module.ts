import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/pages/auth/auth.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './core/pages/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { AuthenticatorGuardService } from './shared/guards/authenticator-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthenticatorGuardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation, UserService } from 'src/app/services/user.service';
import { FirebaseService } from '../../../../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public displayInfo: UserInformation = new UserInformation();

  constructor(
    private userService: UserService,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.displayInfo = this.userService.getInfo();
  }

  logout() {
    this.firebaseService.logout(() => {
      this.router.navigateByUrl('login');
    });
  }
}

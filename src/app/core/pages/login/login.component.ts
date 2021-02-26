import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  selectedTab = 0;
  srcTest = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  changeSelectedIndex(tab: number) {
    this.selectedTab = tab;
  }
}

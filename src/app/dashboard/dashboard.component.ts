import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
firstname:string;
lastname:string;
email:string;
user:string;
  constructor() { }

  ngOnInit() {
      this.firstname=localStorage.getItem('firstname');
      this.lastname=localStorage.getItem('lastname');
      this.email=localStorage.getItem('email');
      this.user=localStorage.getItem('username');
  }


}

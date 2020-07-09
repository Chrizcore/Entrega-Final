import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUserState().subscribe( user => {
      if (user?.displayName === 'edgar herrera') { // admin
        this.user = user;
      } else {
        this.router.navigate(['/userlogin']);
      }
    });
  }
  alta() {
    this.router.navigate(['/formreactive']);
  }

}

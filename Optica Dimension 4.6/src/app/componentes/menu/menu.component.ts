import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: firebase.User;
  constructor(private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
  contact() {
    this.router.navigate(['/contac']);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService, private router: Router , private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      if (data) {
        this.authError = data;
      } else {
        this.authError = false;
      }
    });
  }
  loginGoogle() {
    console.log('Login....');
    this.auth.loginGoogle();
  }
  login(frm) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    },3000);
    this.auth.login(frm.value.email, frm.value.password);
    
  }
  phone() {
    this.router.navigate(['/loginWithPhone']);
  }
  alta() {
    this.router.navigate(['/registration']);
  }
}


import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
export class PhoneNumber {
  number: string;
  // formato para numeros de Mx
  e164() {
    return `+52` + this.number; // Only apply en MX
  }
}
@Component({
  selector: 'app-login-with-phone',
  templateUrl: './login-with-phone.component.html',
  styleUrls: ['./login-with-phone.component.css']
})
export class LoginWithPhoneComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  error: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.windowRef = this.auth.windowRef;
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
    this.auth.getUserState().subscribe( user => {
      if (user?.displayName) { // admin
        this.router.navigate(['/userlogin']);
      }
    });
  }
  registrer() {
    this.router.navigate(['/registration']);
  }
  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    // tslint:disable-next-line:variable-name
    const num = this.phoneNumber.e164();
    console.log('numero a mandar sms       ' + num);
    firebase.auth().signInWithPhoneNumber( num.toString() , appVerifier)
    .then(result => {
      this.windowRef.confirmationResult = result;
      this.error = false;
    })
    .catch( error => {
      console.log(error);
      this.error = error;
    });
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
    .confirm(this.verificationCode)
    .then( result => {
      this.user = result.user;
      this.error = false;
      this.router.navigate(['/userlogin']);
    })
    .catch(  error => {
      console.log(this.verificationCode);
      console.log(error);
      this.error = error;
    });
  }

}

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user: firebase.User;
  aux: any;
  value = new Array();
  num = Math.floor(Math.random() * 4);
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getQR().subscribe( data => {
      console.log(data);
      this.aux = data;
      this.value = this.aux[this.num].code;
      console.log(this.value);
    });
    this.auth.getUserState().subscribe( user => {
      this.user = user;
      if (this.user || user?.displayName) {
        if (user?.displayName === 'edgar herrera') { // admin
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/userlogin']);
        }
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
  // tslint:disable-next-line:member-ordering
  title = 'app';
  // tslint:disable-next-line:member-ordering
  elementType = 'url';
  // tslint:disable-next-line:member-ordering

  // tslint:disable-next-line:member-ordering
  /*
  title = 'app';
  elementType = 'url';
  value = ['Edgar Andres Herrea Diaz', 'Esteban benjamin Herrera Campos',
   'Christian Saul Plascencia Ruiz','Jose Romo Huerta', 'Moises Esteban Palos Estrada'];
   */
}

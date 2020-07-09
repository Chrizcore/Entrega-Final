import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.css']
})
export class CreateDateComponent implements OnInit {
  user: firebase.User;
  email: string;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
      this.email = user.email;
    });
  }
  createDate(form) {
    form.value.email = this.email;
    console.log(form.value);
    this.auth.saveDate(form.value);
    this.router.navigate(['/showDates']);
  }

}

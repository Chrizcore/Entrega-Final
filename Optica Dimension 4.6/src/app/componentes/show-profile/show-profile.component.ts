import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  datos: any;
  user: any;
  info = false;
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.getUserState().subscribe( (user) => {
      this.user = user;
      if (user) {
        this.info = true;
      }
      this.datos = this.auth.getUser(user.email);
      console.log(this.datos);
    });
  }

}

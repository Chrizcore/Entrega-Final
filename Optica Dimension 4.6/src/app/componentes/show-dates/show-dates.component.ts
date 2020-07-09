import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-show-dates',
  templateUrl: './show-dates.component.html',
  styleUrls: ['./show-dates.component.css']
})
export class ShowDatesComponent implements OnInit {
  dates: any;
  user: any;
  info = false;
  editInput: boolean;
  dateEdit: any;
  constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService) {}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    },3000);
    this.editInput = false;
    this.auth.getUserState().subscribe( (user) => {
      this.user = user;
      if (user) {
        this.info = true;
      }
      this.dates = this.auth.getDates(user.email);
    });
  }
  add() {
    this.router.navigate(['/createDate']);
  }
  activateEdit(date: any) {
    this.dateEdit = this.auth.selectDate(date);
    console.log(this.dateEdit);
    this.editInput = true;
  }
  edit(date: any) {
    console.log('anterior', this.dateEdit);
    console.log(this.dateEdit[0].email);
    date.value.email = this.dateEdit[0].email;
    date.value.id = this.dateEdit[0].id;
    console.log('cambio', date.value);
    this.auth.editDate(date.value);
    this.router.navigate(['/userlogin']);
  }
  delete(date: any) {
    this.auth.deleteDate(date);
    this.router.navigate(['/userlogin']);
  }
}

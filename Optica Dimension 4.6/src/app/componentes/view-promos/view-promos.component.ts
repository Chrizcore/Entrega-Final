import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-promos',
  templateUrl: './view-promos.component.html',
  styleUrls: ['./view-promos.component.css']
})
export class ViewPromosComponent implements OnInit {
  value: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getQR().subscribe( data => {
      console.log(data);
      this.value = data;
      console.log(this.value);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';
import * as EmailValidator from 'email-validator';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  authError: any;
  titularAlerta = '';//sweet alert
  alerError = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = false;
    });
  }
  createUser(frm) {
    if (frm.value.password === frm.value.confirm ) {
      if (EmailValidator.validate(frm.value.email)) {
        this.auth.createUser(frm.value);
      } else {
        swal.fire('Opps...huvo un Error', 'Las contraseñas no coinciden', 'error');
      }
    } else {
      this.alerError = true;
      console.log(this.alerError);
      swal.fire('Opps...huvo un Error', 'Las contraseñas no coinciden', 'error');
    }
  }

}



import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private auth: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  sendMail(forms) {
    this.auth.sendMailPOST(forms.value.email, forms.value.subject, forms.value.text);
  }

  contactForm(form) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    },500);
    this.auth.sendMessage(form).subscribe(() => {
      swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
      form.resetForm();
    });
  }


}

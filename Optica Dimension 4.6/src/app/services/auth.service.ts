import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { auth } from 'firebase';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { MessageI } from './../componentes/form-reactive/form-reactive.component';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private contactCollection: AngularFirestoreCollection<MessageI>;
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  id: any;
  newUser: any;
  userlogin: any;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private http: HttpClient,
    private router: Router) {
    this.contactCollection = db.collection<MessageI>('contacts');
  }
  // React Forms
  saveMessage(newContact: MessageI): void {
    this.contactCollection = this.db.collection<MessageI>('contacts');
    this.contactCollection.add(newContact);
  }
  getUserState() {
    return this.afAuth.authState;
  }
  // DATOS DE LA GRAFICA
  getArray(documentId: string) {
    return this.db.collection('graficos').doc(documentId).snapshotChanges();
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/userlogin']);
          console.log('Login exitoso');
        }
      });
  }

  loginGoogle() {
    if (this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider())) {
      this.router.navigate(['/userlogin']);
    }
  }

  createUser(user) {
    console.log(user);
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential)
          .then(() => {
            console.log('Registro completado');
            this.router.navigate(['/userlogin']);
          });
      })
      .catch(error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    });
  }
  logout() {
    return this.afAuth.signOut();
  }
  // API EMAIL
  sendMailPOST(email2: any, subject2: any, text2: any) {
    const user = { email: email2, subject: subject2, text: text2 };
    const body: string[] = [email2, subject2, text2];
    console.log(body);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Content-Length', `${body[0].length + body[1].length + body[2].length + 8}`);
    console.log(body[0].length + body[1].length + body[2].length + 8);
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post('http://localhost:3000/email', JSON.stringify(user), { headers: headers });
  }

  // correo
  sendMessage(body) {
    return this.http.post('http://localhost:3000/formulario', body);
  }
  // data of Qr
  getQR() {
    return this.http.get('http://localhost:3000/qr');
  }
  // Login Code SMS
  windowRef() {
    return window;
  }
  // New Date
  saveDate(date: MessageI) {
    this.contactCollection = this.db.collection<MessageI>('citas');
    console.log(date);
    this.contactCollection.add(date);
  }
  // Select Date
  selectDate(date) {
    console.log(date);
    // tslint:disable-next-line:prefer-const
    let aux = new Array();
     // tslint:disable-next-line:align
     this.db.collection('citas').get()
     // tslint:disable-next-line:only-arrow-functions
     .subscribe(function(querySnapshot) {
      // tslint:disable-next-line:only-arrow-functions
      querySnapshot.forEach(function(doc) {
          if (date.id === doc.id) {
          aux.push(doc.data());
          aux[0].id = doc.id;
          }
      });
  });
    return aux;
  }
  // Edit Date
  editDate(date: any) {
    this.db.collection('citas').doc(date.id).set(date);
  }
  // Delete Date
  deleteDate(date: any) {
    this.db.collection('citas').doc(date.id).delete();
  }
  // Consultar citas
  getDates(user: any) {
    // tslint:disable-next-line:prefer-const
    let aux = new Array();
    // tslint:disable-next-line:prefer-const
    let index = 0;
     // tslint:disable-next-line:align
     this.db.collection('citas').get()
     // tslint:disable-next-line:only-arrow-functions
     .subscribe(function(querySnapshot) {
      // tslint:disable-next-line:only-arrow-functions
      querySnapshot.forEach(function(doc) {
          if (user === doc.data().email ) {
          localStorage.setItem('id', JSON.stringify(doc.id));
          aux.push(doc.data());
          aux[index].id = doc.id;
          index = index + 1;
          }
      });
  });
    console.log(aux);
    localStorage.clear();
    return aux;
}
  // Get User Particular into the database
  getUser(user) {
    // tslint:disable-next-line:prefer-const
    let aux = new Array();
     // tslint:disable-next-line:align
     this.db.collection('Users').get()
     // tslint:disable-next-line:only-arrow-functions
     .subscribe(function(querySnapshot) {
      // tslint:disable-next-line:only-arrow-functions
      querySnapshot.forEach(function(doc) {
          if (user === doc.data().email ) {
          aux.push(doc.data());
          }
      });
  });
    return aux;
  }
}

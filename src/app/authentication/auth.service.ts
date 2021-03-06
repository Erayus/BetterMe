import {Injectable, ViewChild} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  signupUser (email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logInUser (email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}

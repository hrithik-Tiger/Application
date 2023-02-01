import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth : AuthService) { }

  signInWithGoogle() {
   this.auth.googleSignIn()
  }
 


}

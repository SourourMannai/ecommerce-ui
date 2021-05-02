import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  /*lier FormGroup par ses formControls
   via le FormBuiler (à traver la fonction 'group') */

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router) {

    let loginControls = {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    }
    this.loginForm = this.fb.group(loginControls) //lier le formGroup avec formControl
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  loginUser() {
    let data = this.loginForm.value
    console.log(data);

  }


}

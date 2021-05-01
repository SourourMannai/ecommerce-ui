import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validate } from 'json-schema';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../../../assets/css/sb-admin-2.css']
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  /*lier FormGroup par ses formControls
   via le FormBuiler (à traver la fonction 'group') */
  constructor(private fb: FormBuilder) {
    let registerControls = {
      firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('[A-Z][a-z][a-z][a-z ]*')]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('[A-Z][a-z][a-z][a-z ]*')]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmpwd: new FormControl("", [Validators.required, Validators.minLength(8)]),
    }
    this.registerForm = this.fb.group(registerControls) //lier le formGroup avec formControl
  }

  ngOnInit(): void {
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get confirmpwd() { return this.registerForm.get('confirmpwd') }


  registerUser() {
    console.log(this.registerForm.value)
  }

}

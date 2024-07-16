import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: any;

  errors: any = [];

  loading = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      r_email: ['', [Validators.required, Validators.email]],
      first_name: ['', Validators.required],
      r_password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      last_name: ['', Validators.required]
    })
  }

  get r_email(){
    return this.registerForm.controls['r_email'];
  }
  get first_name(){
    return this.registerForm.controls['first_name'];
  }
  get r_password(){
    return this.registerForm.controls['r_password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  get last_name(){
    return this.registerForm.controls['last_name'];
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteServiceService } from '../../Services/note-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: any;

  errors: any = [];

  loading = false;


  constructor(
    private http: HttpClient,
    private router: Router,
    private noteService: NoteServiceService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];
  }
  // onLogin(loginForm: NgForm) {



  //   this.loading = true
  //   this.noteService.onLogin(loginData).subscribe({
  //     next: (res: any) => {
  //       if (res.result) {
  //         alert("Login Success")
  //         this.router.navigateByUrl('/home')
  //       } else {
  //         alert(res.message)
  //       }
  //     },
  //     error: (err: any) => {
  //       this.errors = err.error;
  //       console.log(err.error, 'errors')
  //     },
  //     // error: (error: { message: any; }) => {
  //     //   alert(error.message ?? error);
  //     //   this.loading = false;
  //     // },
  //     complete: () => {
  //       this.loading = false;
  //     }
  //   }
  //   )
  // }
}


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]

    });

  }

  login() {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (
      email === 'admin@tvktechs.com' &&
      password === 'tvktechs3'
    ) {

      alert('Login Successful');

      this.router.navigate(['/upload']);

    } else {

      alert('Invalid Email or Password');

    }

  }

}

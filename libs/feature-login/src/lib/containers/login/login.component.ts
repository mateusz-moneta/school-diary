import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginApiService } from '../../services/login-api.service';
import { User } from '@school-diary/shared';

@Component({
  selector: 'school-diary-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginApiService: LoginApiService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginRequestPayload = {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      };

      this.loginApiService.register(loginRequestPayload).subscribe((user: User) => {
        this.loginForm.reset();
      });
    }
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}

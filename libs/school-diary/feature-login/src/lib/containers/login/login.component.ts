import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InputType } from '@school-diary/school-diary/domain';
import { LanguageService } from '@school-diary/school-diary/shared';
import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Component({
  selector: 'school-diary-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  readonly inputType = InputType;

  constructor(private formBuilder: FormBuilder, private language: LanguageService, private userSessionFacade: UserSessionFacade) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginRequestPayload = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };

      this.userSessionFacade.loginUser(loginRequestPayload);
    }
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}

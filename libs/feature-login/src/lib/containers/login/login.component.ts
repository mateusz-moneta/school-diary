import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LanguageService } from '@school-diary/shared';

@Component({
  selector: 'school-diary-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private language: LanguageService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {}

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}

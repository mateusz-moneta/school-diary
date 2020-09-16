import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LanguageService } from '@school-diary/shared';
import { RegisterApiService } from '../../services/register-api.service';

@Component({
  selector: 'school-diary-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  error: string;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private language: LanguageService,
    private registerApiService: RegisterApiService
  ) {}

  ngOnInit(): void {
    this.initRegisterForm();
  }

  register(): void {
    if (this.registerForm.valid) {
      this.registerApiService.register({
        email: this.registerForm.get('email').value,
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value,
      }).subscribe();
    }
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}

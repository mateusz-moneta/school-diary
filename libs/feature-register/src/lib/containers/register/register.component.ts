import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LanguageService, UserTypeDefinition } from '@school-diary/shared';
import { RegisterApiService } from '../../services/register-api.service';

@Component({
  selector: 'school-diary-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  error: string;
  registerForm: FormGroup;

  readonly userTypeOptions = [
    { translationKey: 'SHARED.SYSTEM-ADMINISTRATOR', value: UserTypeDefinition.SYSTEM_ADMINISTRATOR },
    { translationKey: 'SHARED.EDUCATOR', value: UserTypeDefinition.EDUCATOR },
    { translationKey: 'SHARED.TEACHER', value: UserTypeDefinition.TEACHER },
    { translationKey: 'SHARED.LEGAL-GUARDIAN', value: UserTypeDefinition.LEGAL_GUARDIAN },
    { translationKey: 'SHARED.STUDENT', value: UserTypeDefinition.STUDENT }
  ];

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
        firstName: this.registerForm.get('firstName').value,
        lastName: this.registerForm.get('lastName').value,
        userType: this.registerForm.get('userType').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      }).subscribe();
    }
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      userType: [UserTypeDefinition.LEGAL_GUARDIAN],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}

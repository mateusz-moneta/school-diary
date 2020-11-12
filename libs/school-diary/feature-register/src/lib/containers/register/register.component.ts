import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LanguageService } from '@school-diary/school-diary/shared';
import { RegisterApiService } from '../../services/register-api.service';
import { User, UserType } from '@school-diary/school-diary/domain';

@Component({
  selector: 'school-diary-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  readonly userTypeOptions = [
    { translationKey: 'SHARED.SYSTEM-ADMINISTRATOR', value: UserType.SYSTEM_ADMINISTRATOR },
    { translationKey: 'SHARED.EDUCATOR', value: UserType.EDUCATOR },
    { translationKey: 'SHARED.TEACHER', value: UserType.TEACHER },
    { translationKey: 'SHARED.LEGAL-GUARDIAN', value: UserType.LEGAL_GUARDIAN },
    { translationKey: 'SHARED.STUDENT', value: UserType.STUDENT }
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
      const registerRequestPayload = {
        first_name: this.registerForm.get('firstName').value,
        last_name: this.registerForm.get('lastName').value,
        user_type: this.registerForm.get('userType').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      };

      this.registerApiService.register(registerRequestPayload).subscribe((user: User) => {
        this.registerForm.reset();
      });
    }
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      userType: [UserType.LEGAL_GUARDIAN],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}

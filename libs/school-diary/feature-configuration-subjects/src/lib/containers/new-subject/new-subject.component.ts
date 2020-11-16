import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';

@Component({
  selector: 'school-diary-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.scss']
})
export class NewSubjectComponent implements OnInit {
  subjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private subjectsFacade: SubjectsFacade) {}

  ngOnInit(): void {
    this.initSubjectForm();
  }

  create(): void {
    this.subjectsFacade.createSubject({
      name: this.subjectForm.get('name').value,
      short_name: this.subjectForm.get('shortName').value
    })
  }

  private initSubjectForm(): void {
    this.subjectForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      shortName: ['', [Validators.required, Validators.maxLength(3)]]
    });
  }
}

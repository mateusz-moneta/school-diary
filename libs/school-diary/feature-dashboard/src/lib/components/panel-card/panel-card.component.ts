import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'school-diary-panel-card',
  templateUrl: './panel-card.component.html',
  styleUrls: ['./panel-card.component.scss']
})
export class PanelCardComponent implements OnInit {
  @Input()
  titleTranslationKey: string;

  ngOnInit(): void {
  }

}

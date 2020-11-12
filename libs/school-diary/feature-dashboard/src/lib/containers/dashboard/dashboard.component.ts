import { Component, OnInit } from '@angular/core';

import { panelCardsConfig } from '../../configs/panel-cards.config';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { Language } from '@school-diary/school-diary/domain';

@Component({
  selector: 'school-diary-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly panelCardsConfig = panelCardsConfig;

  constructor(private settingsFacade: SettingsFacade) {}

  ngOnInit(): void {
    this.settingsFacade.changeLanguage(Language.PL);
  }
}

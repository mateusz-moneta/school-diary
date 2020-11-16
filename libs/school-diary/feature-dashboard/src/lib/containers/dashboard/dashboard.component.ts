import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { panelCardsConfig } from '../../configs/panel-cards.config';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { Language } from '@school-diary/school-diary/domain';
import { LanguageService } from '@school-diary/school-diary/shared';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'school-diary-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isOpen = false;
  mobileQuery: MediaQueryList;

  private readonly mobileQueryListener: () => void;

  readonly panelCardsConfig = panelCardsConfig;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private settingsFacade: SettingsFacade,
    private language: LanguageService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.settingsFacade.changeLanguage(Language.PL);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  onOpen(): void {
    this.isOpen = !this.isOpen;
  }
}

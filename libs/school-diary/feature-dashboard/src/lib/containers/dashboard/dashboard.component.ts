import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { panelCardsConfig } from '../../configs/panel-cards.config';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { LanguageService } from '@school-diary/school-diary/shared';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Component({
  selector: 'school-diary-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  sidenavOpened$ = this.settingsFacade.sidenavOpened$;

  private readonly mobileQueryListener: () => void;

  readonly panelCardsConfig = panelCardsConfig;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private languageService: LanguageService,
    private settingsFacade: SettingsFacade,
    private userSessionFacade: UserSessionFacade
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  onClose(): void {
    this.settingsFacade.closeSidenav();
  }

  onLogout(): void {
    this.userSessionFacade.logoutUser();
  }

  onOpen(): void {
    this.settingsFacade.openSidenav();
  }
}

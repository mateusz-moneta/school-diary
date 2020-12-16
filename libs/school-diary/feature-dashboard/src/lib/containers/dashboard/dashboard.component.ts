import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { LanguageService } from '@school-diary/school-diary/shared';
import { panelCardsConfig } from '../../configs/panel-cards.config';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { sidenavConfig } from '@school-diary/school-diary/config';
import { SidenavItem } from '@school-diary/school-diary/domain';
import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Component({
  selector: 'school-diary-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  navigation: SidenavItem[] = [];
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

  ngOnInit(): void {
    this.initNavigation();
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

  private initNavigation(): void {
    this.userSessionFacade.getLoginUserType$
      .pipe(first(userType => !!userType))
      .subscribe(userType => {
        this.navigation = sidenavConfig.filter(configuration =>
          !configuration.allowedUserTypes
          || configuration.allowedUserTypes.includes(userType)
        );
      })
  }
}

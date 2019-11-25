import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppSettingsService } from './app-settings.service';

// @ngrx
import { Store, select } from '@ngrx/store';
import {
  AppState,
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl
} from './core/@ngrx';

import { Subscription, merge } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) title: ElementRef<HTMLElement>;

  constructor(
    appSettingsService: AppSettingsService,
    private store: Store<AppState>
  ) {
    appSettingsService.loadAppSettings();
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'Shop';
  }
}

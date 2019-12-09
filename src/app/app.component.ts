import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppSettingsService } from './app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) title: ElementRef<HTMLElement>;

  constructor(
    appSettingsService: AppSettingsService,
  ) {
    appSettingsService.loadAppSettings();
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'Shop';
  }
}

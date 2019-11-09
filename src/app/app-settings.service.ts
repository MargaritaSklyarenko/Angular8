import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './core/services/local-storage.service';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private appSettsUrl = 'assets/app-settings.json';
  private defaultSettings = {
    environment: 'development'
  };

  constructor(
    private http: HttpClient,
    private lacalStorage: LocalStorageService) { }

  loadAppSettings(): void {
    const appSettings = this.lacalStorage.getItem('appSettings');

    if (!appSettings) {
      this.http.get(this.appSettsUrl).pipe(
        retry(2),
        catchError(this.handleError)
      ).subscribe(settings => this.lacalStorage.setItem('appSettings', settings));
    }
  }

  private handleError() {
    this.lacalStorage.setItem('appSettings', this.defaultSettings);
    return throwError('Something bad happened; default settings are set.');
  }
}

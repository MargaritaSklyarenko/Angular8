import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addItem(key: string, data: any): void {
    if (localStorage.getItem(key) === null) {
      this.setItem(key, data);
    } else {
      this.pushItem(key, data);
    }
  }

  pushItem(key: string, data: any): void {
    this.setItem(key, [...this.getItem(key), ...data]);
  }

  setItem(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing data from localStorage', e);
    }
  }
}


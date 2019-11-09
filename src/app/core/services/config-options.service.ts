import { Injectable } from '@angular/core';
import { ConfigModel } from 'src/app/core/services/models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  public objSettings = new ConfigModel();

  getObjSettings(): ConfigModel {
    return this.objSettings;
  }

  setObjSettings(settings): void {
    this.objSettings = Object.assign({}, settings);
  }

  get id(): number {
    return this.objSettings.id;
  }

  set id(id) {
    this.objSettings.id = id;
  }

  get login(): string {
    return this.objSettings.login;
  }

  set login(login) {
    this.objSettings.login = login;
  }

  get email(): string {
    return this.objSettings.email;
  }

  set email(email) {
    this.objSettings.email = email;
  }
}

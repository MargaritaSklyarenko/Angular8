import { Injectable } from '@angular/core';

const serviceLiteral = {App: 'TaskManager', Ver: '1.0'};

@Injectable({
  providedIn: 'root',
  useValue: serviceLiteral
})
export class ConstantService {}

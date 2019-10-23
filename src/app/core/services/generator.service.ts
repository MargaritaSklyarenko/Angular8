import { Injectable, InjectionToken } from '@angular/core';

export const Generator = new InjectionToken<any[]>('DataTop3');

export function GeneratorFactory(n: number) {
  return (generatorService: GeneratorService): string =>  generatorService.generate(n);
}

export class GeneratorService {
  
  data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678';

  constructor() { }

  generate(n: number): string {
    let randomString = '';
    for (let i = 0; i < n; i++) {
        const randomPoz = Math.floor(Math.random() * this.data.length);
        randomString += this.data.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }
}

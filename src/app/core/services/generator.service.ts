import { Injectable } from '@angular/core';

export function GeneratorFactory(n: number) {
  return (service: GeneratorService): string => {
    // всю эту бизнес логику необхдимо перенести в метод сервиса service и тут его вызвать,
    // передав n.
    const data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678';
    let randomString = '';
    for (let i = 0; i < n; i++) {
        const randomPoz = Math.floor(Math.random() * data.length);
        randomString += data.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  };
}

@Injectable({
  providedIn: 'root',
  useFactory: GeneratorFactory(8)
})
export class GeneratorService {
  constructor() { }
}

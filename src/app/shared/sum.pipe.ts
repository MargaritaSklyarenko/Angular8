import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): any {
    return items.reduce((accumulator, currentValue) => accumulator + currentValue[attr], 0);
  }
}
// желательно в папке shared создать подпипки directives, components, pipes
// желательно сервисы организовать в отдельной папке, например core, а не shared
// это связанос тем, что у компонентов+директив+пайпов и сервисов разные области видимости

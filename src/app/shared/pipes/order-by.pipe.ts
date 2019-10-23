import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(items: any[], field: string, descending: boolean = true): any {
    return items.sort( (prev, current) => {
      if (descending) {
        return prev[field] > current[field] ? -1 : 1;
      } else {
        return (prev[field] < current[field]) ? -1 : 1;
      }
    });
  }
}

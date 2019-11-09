import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  startTime;
  endTime;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('products')) {
      this.startTime = new Date();
    }

    return next.handle(req).pipe(
        filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
        map((event: HttpResponse<any>) => {
          if (event.url.includes('products')) {
            this.endTime = new Date();
            console.log(`Time for requst spent: ${this.endTime - this.startTime}`);
          }
          return event;
        })
      );
  }
}

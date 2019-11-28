import { select, Store } from '@ngrx/store';
import { selectProductsLoaded, AppState } from './../../core/@ngrx';
import * as ProducsActions from './../../core/@ngrx/products/products.actions';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

export function checkStore(store: Store<AppState>): Observable<boolean> {
  return store.pipe(
    select(selectProductsLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(ProducsActions.getProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}

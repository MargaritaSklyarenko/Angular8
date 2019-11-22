import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as ProductsActions from './products.actions';


@Injectable()
export class TasksEffects implements OnInitEffects, OnRunEffects {
  constructor(private actions$: Actions) {
    console.log('[TASKS EFFECTS]');
  }
}

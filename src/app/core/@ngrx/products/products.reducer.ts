import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialTasksState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
  initialTasksState,
  on(ProductsState.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsState.getProduct, state => {
    console.log('GET_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsState.createProduct, state => {
    console.log('CREATE_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsState.updateProduct, state => {
    console.log('UPDATE_PRODUCT action being handled!');
    return { ...state };
  }),
//   on(TasksActions.completeTask, (state, { task }) => {
//     console.log('COMPLETE_TASK action being handled!');

//     const id = task.id;
//     const data = state.data.map(t => {
//       if (t.id === id) {
//         return { ...task, done: true };
//       }

//       return t;
//     });

//     return {
//       ...state,
//       data
//     };
//   }),
  on(ProductsState.deleteProduct, state => {
    console.log('DELETE_PRODUCT action being handled!');
    return { ...state };
  })
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}

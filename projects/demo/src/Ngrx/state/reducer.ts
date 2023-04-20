import { createReducer, on } from '@ngrx/store';
import { addDetail, addPost} from './action';
import { initialState } from './state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  }),
  on(addDetail, (state, action) => {
    return {
      ...state,
      data: action.detail,
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}

import { createReducer, on } from '@ngrx/store';
import { addPost} from './action';
import { initialState } from './state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}

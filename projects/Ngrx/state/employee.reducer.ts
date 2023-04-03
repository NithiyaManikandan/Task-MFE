import { createReducer, on } from '@ngrx/store';
import { addPost} from './employee.action';
import { initialState } from './employee.state';

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

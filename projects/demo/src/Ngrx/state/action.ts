import { Employee, Project } from '../models/model';
import { createAction, props } from '@ngrx/store';
import { Data } from './state';

export const ADD_POST_ACTION = '[post page] add post'
export const addPost = createAction(ADD_POST_ACTION, props<{data : Data[]}>())

export const ADD_DETAIL_ACTION = '[post detail] add detail'
export const addDetail = createAction(ADD_DETAIL_ACTION, props<{detail : Data[]}>())

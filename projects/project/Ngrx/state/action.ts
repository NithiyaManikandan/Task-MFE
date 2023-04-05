import { Employee, Project } from '../models/model';
import { createAction, props } from '@ngrx/store';
import { Data } from './state';

// export const GET_ALL_EMPLOYEE = 'Get all employee detail';
// export const GET_ALL_EMPLOYEE_SUCCESS = 'Get all employee detail success';

// export const getAllEmployeeDetails = createAction(GET_ALL_EMPLOYEE);
// export const getAllEmployeeSuccess = createAction(
//   GET_ALL_EMPLOYEE_SUCCESS,
//   props<{ employee: Employee[] }>()
// );

// export const GET_ALL_PROJECT = 'Get all employee detail';
// export const GET_ALL_PROJECT_SUCCESS = 'Get all employee detail success';

// export const getAllProjectDetails = createAction(GET_ALL_PROJECT);
// export const getAllProjectSuccess = createAction(
//   GET_ALL_PROJECT_SUCCESS,
//   props<{ project: Project[] }>()
// );



export const ADD_POST_ACTION = '[post page] add post'
export const addPost = createAction(ADD_POST_ACTION, props<{data : Data[]}>())

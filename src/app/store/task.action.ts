import { createAction, props } from '@ngrx/store';
import { todoItem } from '../models/todoItem.model';

//Add Task
export const ADD_Task = '[Add Task] Add Task firebase';
export const ADD_SUCCESS = '[Add Task] Add Task Success';
export const ADD_FAIL = '[Add Task] Add Task Failure';
//Load Task
export const LOAD_TASK = '[Load Task] Load Task from Firebase';
export const LOAD_TASK_SUCCESS = '[Task] Load Tasks Success';
export const LOAD_TASK_FAIL = '[Task] Load Tasks Failure';

//Edit Task
export const EDIT_TASK ='[Edit Task] Edit Task';
export const EDIT_TASK_SUCCESS ='[Edit Task] Edit Task Success';
export const EDIT_TASK_FAIL ='[Edit Task] Edit Task Failure';

//delete Task
export const DELETE_TASK ='[Delete Task] Delete Task';
export const DELETE_TASK_SUCCESS ='[Delete Task] Delete Task Success';
export const DELETE_TASK_FAIL ='[Delete Task] Delete Task Failure';

export const addTask = createAction(ADD_Task, props<{ task: todoItem }>());
export const addTaskSuccess = createAction(
  ADD_SUCCESS,
  props<{ task: todoItem }>()
);

export const addTaskFailure = createAction(ADD_FAIL, props<{ error: any }>());

export const loadTask = createAction(LOAD_TASK);
export const loadTasksSuccess = createAction(
  LOAD_TASK_SUCCESS,
  props<{ tasks: todoItem[] }>()
);

export const loadTasksFailure = createAction(
  LOAD_TASK_FAIL,
  props<{ error: any }>()
);

export const editTask =createAction( EDIT_TASK,props <{id:string,task:todoItem}>());


export const editTaskSuccess =createAction(EDIT_TASK_SUCCESS,props<{id:string,task:todoItem}>());
export const editTaskFail =createAction(EDIT_TASK_FAIL,props<{error:any}>());

export const deleteTask =createAction(DELETE_TASK ,props<{id:string}>())

export const deleteTaskSuccess =createAction(DELETE_TASK_SUCCESS,props<{id:string}>());
export const deleteTaskFail =createAction(DELETE_TASK_FAIL,props<{error:any}>());
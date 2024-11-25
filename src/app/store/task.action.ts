import { createAction, props } from "@ngrx/store";
import { todoItem } from "../models/todoItem.model";

export const ADD_Task= '[Add Task] Add Task firebase';
export const ADD_SUCCESS ='[Add Task] Add Task Success';
export const ADD_FAIL ='[Add Task] Add Task Failure'

export const addTask = createAction(ADD_Task,props<{task:todoItem}>());
export const addTaskSuccess = createAction(
   ADD_SUCCESS, props<{ task: todoItem }>() );
  
  export const addTaskFailure = createAction(
    ADD_FAIL,
    props<{ error: any }>()
  );

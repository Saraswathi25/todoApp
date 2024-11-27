import { createReducer, on } from '@ngrx/store';
import { initialState } from './task.state';
import {
  addTaskSuccess,
  deleteTaskFail,
  deleteTaskSuccess,
  editTaskSuccess,
  loadTask,
  loadTasksFailure,
  loadTasksSuccess,
} from './task.action';

const _taskReducer = createReducer(
  initialState,
  on(loadTask, (state) => ({ ...state, task: [], error: null })),
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, task:tasks     })),
  on(loadTasksFailure, (state, { error }) => ({ ...state, error })),
  on(addTaskSuccess, (state, { task }) => {
    return {
      ...state,
      tasks: [...state.task, task],
    };
  }),
  on(editTaskSuccess,(state,{id,task})=>{
    const updateTask =state.task.map((t)=>{
      t.id ==  id ? {...t,...task} : t
    });
    return {
      ...state,
      tasks: updateTask
    }
  }),
  on(deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.task.filter(task => task.id !== id)  // Remove the task with the deleted ID
  })),
  on(deleteTaskFail, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function TaskReducer(state: any, action: any) {
  return _taskReducer(state, action);
}

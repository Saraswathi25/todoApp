import { createReducer, on } from '@ngrx/store';
import { initialState } from './task.state';
import {
  addTaskSuccess,
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
  })
);

export function TaskReducer(state: any, action: any) {
  return _taskReducer(state, action);
}

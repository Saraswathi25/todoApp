import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "./task.state";


export const selectTaskState =createFeatureSelector<TaskState>('tasks');
export const selectTask =createSelector(selectTaskState,(state)=> state.task)



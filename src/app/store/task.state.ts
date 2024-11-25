import { todoItem } from "../models/todoItem.model";


export interface TaskState{
    task:todoItem |null
}

export const initialState: TaskState={
    task:null
}
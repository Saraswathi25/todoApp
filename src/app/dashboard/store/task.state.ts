import { todoItem } from "../../models/todoItem.model";


export interface TaskState{
    task:todoItem[]
}

export const initialState: TaskState={
    task:[]
}
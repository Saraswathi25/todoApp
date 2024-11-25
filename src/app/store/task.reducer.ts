import { createReducer, on } from "@ngrx/store";
import { initialState } from "./task.state";
import { addTaskSuccess } from "./task.action";



const _taskReducer=createReducer(initialState,
    on(addTaskSuccess,(state,action)=>{
        return{
            ...state,
            task:action.task
        }
    })
    
)

export function TaskReducer(state:any,action:any){
    return _taskReducer(state,action);

}
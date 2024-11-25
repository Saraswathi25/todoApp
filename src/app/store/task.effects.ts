import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTask, addTaskFailure, addTaskSuccess } from "./task.action";
import { exhaustMap, map } from "rxjs";
import { TaskService } from "../services/task.service";



@Injectable()
export class TaskEffect{

    constructor(private action$:Actions ,private taskService: TaskService){
    }

    addTask$ =createEffect(()=>
    this.action$.pipe(
        ofType(addTask),
        exhaustMap(action=>{ 
            return this.taskService.addTask(action.task).then((data)=>{
                console.log(data);
                return addTaskSuccess({task:action.task})
            },
        (error)=> addTaskFailure({error}))
        })
    )
    )

}
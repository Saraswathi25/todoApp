import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTask, addTaskFailure, addTaskSuccess, loadTask, loadTasksFailure, loadTasksSuccess } from "./task.action";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { TaskService } from "../services/task.service";



@Injectable()
export class TaskEffect{

    constructor(private action$:Actions ,private taskService: TaskService){
    }

    loadTask$= createEffect(()=>
    this.action$.pipe(
        ofType(loadTask),
        mergeMap(()=>{
            return this.taskService.getTasks().pipe(
                map((tasks) => loadTasksSuccess({ tasks })),
                catchError((error) => of(loadTasksFailure({ error })))
            );
        })
    ))

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
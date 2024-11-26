import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTask, addTaskFailure, addTaskSuccess, deleteTask, deleteTaskFail, deleteTaskSuccess, editTask, editTaskFail, editTaskSuccess, loadTask, loadTasksFailure, loadTasksSuccess } from "./task.action";
import { catchError, exhaustMap, from, map, mergeMap, of } from "rxjs";
import { TaskService } from "../services/task.service";
import { createFeatureReducerFactory } from "@ngrx/store/src/utils";



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

    editTask$ = createEffect(() =>
        this.action$.pipe(
          ofType(editTask),
          mergeMap(({ id, task }) =>
            from(this.taskService.editTask(id, task)).pipe(
              map(() => editTaskSuccess({ id, task })),
              catchError((error) => of(editTaskFail({ error })))
            )
          )
        )
      );

      deleteTask$ = createEffect(() =>
        this.action$.pipe(
          ofType(deleteTask),
          mergeMap((action) =>
            from(this.taskService.deleteTask(action.id)).pipe(
              map(() => {
                return deleteTaskSuccess({ id: action.id });
              }),
              catchError((error) => of(deleteTaskFail({ error: error.message })))
            )
          )
        )
      );
      
      
      
}
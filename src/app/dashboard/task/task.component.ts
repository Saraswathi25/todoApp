import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { todoItem } from 'src/app/models/todoItem.model';
import { loadTask } from 'src/app/store/task.action';
import { selectTask } from 'src/app/store/task.selector';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
   name !:string 
   @Input()
   status !:string 
   @Input()
   priority !:string 
   @Input()
   due !:Date 
   @Input()
   id !:string 
   @Output()
   taskId : EventEmitter<string> =new EventEmitter<string>()
   @Output()
   taskIdDelete : EventEmitter<string> =new EventEmitter<string>()
 
  ngOnInit(){
   
  }
  deleteTask(id:string){
    this.taskIdDelete.emit(id)

  }
  editTask(id:string){
    this.taskId.emit(id)
  }

}

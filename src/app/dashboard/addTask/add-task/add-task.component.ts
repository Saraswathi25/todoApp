import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { todoItem } from 'src/app/models/todoItem.model';
import { TaskService } from 'src/app/services/task.service';
import { addTask, editTask } from 'src/app/store/task.action';
import { TaskState } from 'src/app/store/task.state';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  addTaskForm!:FormGroup
  @Output()
  isModalOpenEvent :EventEmitter<any> =new EventEmitter<any>();
  @Input()
  selectedTask :  todoItem | null = null; 
  @Output() 
  resetSelectedTask: EventEmitter<null> = new EventEmitter<null>(); 

  constructor(private store:Store<TaskState>){

  }

  
  ngOnInit(){
    console.log(this.selectedTask)
    this.addTaskForm = new FormGroup({
      name: new FormControl(this.selectedTask? this.selectedTask.name :''),
      status:new FormControl(this.selectedTask? this.selectedTask.status :''),
      priority:new FormControl(this.selectedTask? this.selectedTask.priority :''),
      due:new FormControl(this.selectedTask? this.selectedTask.due :''),
    }  
    )

  }

  
  onSubmit(){
    const task = this.addTaskForm.value;
    if(this.selectedTask?.id){
      const taskId = this.selectedTask.id; // Ensure `id` exists in selectedTask
      const updatedTask = this.addTaskForm.value;
      this.store.dispatch(editTask({id:taskId,task:updatedTask}))
      this.selectedTask = null; 
    }
    else{
    
      this.store.dispatch(addTask({task}));
     
    }
    this.closeDialog();
  }
  closeDialog(){
    this.resetSelectedTask.emit(null); 
    this.isModalOpenEvent.emit(false)
   

  }

}

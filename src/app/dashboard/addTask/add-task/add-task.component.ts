import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskService } from 'src/app/services/task.service';
import { addTask } from 'src/app/store/task.action';
import { TaskState } from 'src/app/store/task.state';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  constructor(private store:Store<TaskState>){

  }

  addTaskForm!:FormGroup
  @Output()
  isModalOpenEvent :EventEmitter<any> =new EventEmitter<any>()

  ngOnInit(){
    this.addTaskForm = new FormGroup({
      name: new FormControl(''),
      status:new FormControl(''),
      priority:new FormControl(''),
      due:new FormControl(''),
    }  
    )

  }

  
  onSubmit(){
   const task = this.addTaskForm.value;
    this.store.dispatch(addTask({task}));
    this.closeDialog();

  }
  closeDialog(){
    this.isModalOpenEvent.emit(false)

  }

}

import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { todoItem } from '../models/todoItem.model';
import { selectTask } from '../store/task.selector';
import { Store } from '@ngrx/store';
import { deleteTask, loadTask } from '../store/task.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = 'Create';
  icon = 'mdi:plus';
  isModalOpen: boolean = false;
  tasks$!: Observable<todoItem[]>;
  selectedTask: todoItem | null = null;

  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(loadTask());
    this.tasks$ = this.store.select(selectTask);
  }
  openAddTask(value:string) {
    if(value=== 'open'){
      this.selectedTask = null;
      this.isModalOpen = true;
    }
  else{
    this.isModalOpen = !this.isModalOpen;
  }
  }
  closeModal(e: boolean) {
    this.isModalOpen = e;
    this.selectedTask = null;
  }
  onEdit(taskId: string) {
    if (!this.isModalOpen) {
      this.tasks$
        .pipe(map((tasks) => tasks.find((task) => task.id === taskId)))
        .subscribe((task) => {
          if (task) {
            this.selectedTask = task;
            this.openAddTask('edit')  
          }
        });
    }
  }
  onDelete(id:string){
    this.store.dispatch(deleteTask({id}))
  }
  resetSelectedTask() {
    this.selectedTask = null;  
  }
}

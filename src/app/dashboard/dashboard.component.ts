import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { todoItem } from '../models/todoItem.model';
import { selectTask } from './store/task.selector';
import { Store } from '@ngrx/store';
import { clearTasks, deleteTask, loadTask } from './store/task.action';
import { selectUser } from '../user_store/user.selector';
import { User } from '../user_store/user.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name = 'Add Task';
  icon = 'mdi:plus';
  isModalOpen: boolean = false;
  tasks$!: Observable<todoItem[]>;
  selectedTask: todoItem | null = null;
  user$ !: Observable<User |null>;
  selectedFilter: string = '';  // Store the selected filter (Status or Priority)
  filteredTask!:todoItem[] ;

  constructor(private store: Store) {}
  filterMethods =[ 'Status','Priority']
 tasks!:todoItem[]

  ngOnInit() {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      if (user) {
        // Load tasks only if the user is logged in
        this.store.dispatch(loadTask({ userId: user.id }));
      } else {
        // Clear tasks if no user is logged in
        this.store.dispatch(clearTasks());
      }
    });
    this.tasks$ = this.store.select(selectTask);
    // Debug: Log task changes
    this.tasks$.subscribe((tasks) => {
     this.tasks=tasks;
     this.filteredTask=tasks;
   
    });   
  }
  clear(){
    this.filteredTask=this.tasks
  }
  onFilterChange(event: [string, string]) {
    // Filter tasks based on selected filter and option
    const selectedValue = event[0];  // Get the selected value
    
  const method = event[1];  
 
    if (method === 'Status') {
      this.filteredTask = this.tasks.filter(task => task.status === selectedValue);
    } else if (method === 'Priority') {
      this.filteredTask = this.tasks.filter(task => task.priority === selectedValue);
    } else {
      this.filteredTask = [...this.tasks];  // No filter selected, show all tasks
    }
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

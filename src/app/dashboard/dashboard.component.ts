import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { todoItem } from '../models/todoItem.model';
import { selectTask } from '../store/task.selector';
import { Store } from '@ngrx/store';
import { loadTask } from '../store/task.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  name="Create"
  icon="mdi:plus"
  isModalOpen:boolean=false;
  tasks$ !: Observable<todoItem[]>;
   
  constructor(private store:Store){
   
   
  }
  ngOnInit(){
    this.store.dispatch(loadTask());
    this.tasks$ = this.store.select(selectTask);
    this.tasks$.subscribe(data => console.log(data))
  }
  openAddTask(){
    this.isModalOpen =!this.isModalOpen;
  }
  closeModal(e:boolean){
   this.isModalOpen =e;
  }
}

import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './addTask/add-task/add-task.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';


const routes: Routes=[
    {
        path:'',component:DashboardComponent
    }
]

@NgModule({
  declarations: [
    
  
    DashboardComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  
})
export class DashboardModule { }

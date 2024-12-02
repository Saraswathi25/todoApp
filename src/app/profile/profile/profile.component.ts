import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTask } from 'src/app/dashboard/store/task.selector';
import { todoItem } from 'src/app/models/todoItem.model';
import { UserService } from 'src/app/services/user.service';
import { logout } from 'src/app/user_store/user.action';
import { selectUser } from 'src/app/user_store/user.selector';
import { User } from 'src/app/user_store/user.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$ !: Observable<User |null>;
  tasks$ !:Observable<todoItem[]|null>;
  tasks !: todoItem[] |null;
  length !:number |undefined
  completed!:number |undefined;
  high!:number |undefined;
  constructor(private store:Store,private router :Router,private authService:UserService){
    
  }

  ngOnInit(){
   
    this.user$ = this.store.select(selectUser);
    this.tasks$ = this.store.select(selectTask);
   
    this.tasks$.subscribe((tasks) => {
     this.tasks=tasks;
    this.length =this.tasks?.length;
   this.completed= (this.tasks?.filter( task => task.status == 'Completed').length)
   this.high= (this.tasks?.filter( task => task.priority == 'High').length)

    });   
  }
  logout(){
    this.authService.logout();
    this.router.navigate([''])
  }

}

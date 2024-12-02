import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { loadUser, logout } from './user_store/user.action';
import { clearTasks } from './dashboard/store/task.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  constructor(private store: Store,private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.store.dispatch(loadUser()); // Dispatch when user state is ready
      } else {
        this.store.dispatch(clearTasks()); // Clear tasks when no user is logged in
        this.store.dispatch(logout()); // Dispatch logout action if user is null
      }
    });
  }
}

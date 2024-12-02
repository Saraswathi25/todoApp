

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { todoItem } from "../models/todoItem.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Store } from "@ngrx/store";
import { logout } from "../user_store/user.action";
import { clearTasks } from "../dashboard/store/task.action";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private store: Store,private auth: AngularFireAuth){

    }
    logout() {
        this.auth.signOut()
          .then(() => {
          
            // Dispatch logout action after signing out
            this.store.dispatch(logout());
            this.store.dispatch(clearTasks());
          })
          .catch((error) => {
            console.error('Error during logout:', error);
          });
      }
    }
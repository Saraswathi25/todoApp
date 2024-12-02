

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { todoItem } from "../models/todoItem.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    constructor(private firestore: AngularFirestore,private auth: AngularFireAuth){

    }
    private collectionName = 'tasks';
     // Add a task with the user ID
  addTask(task: todoItem) {
    return this.auth.currentUser.then(user => {
      if (user) {
        const taskWithUser = { ...task, userId: user.uid }; // Attach the user ID
        return this.firestore.collection(this.collectionName).add(taskWithUser);
      } else {
        throw new Error('User not authenticated');
      }
    });
  }
   
  // Fetch tasks only for the current user
  getTasks(userId: string): Observable<todoItem[]> {
    return this.firestore
      .collection<todoItem>(this.collectionName, (ref) =>
        ref.where('userId', '==', userId) // Query tasks for the specific user
      )
      .valueChanges({ idField: 'id' }); // Include Firestore document IDs
  }

  // Edit a task (ensure the task belongs to the current user)
  editTask(id: string, task: todoItem) {
    return this.auth.currentUser.then(user => {
      if (user) {
        const updatedTask = { ...task, userId: user.uid }; // Attach the user ID
        return this.firestore.collection(this.collectionName).doc(id).update(updatedTask);
      } else {
        throw new Error('User not authenticated');
      }
    });
  }

  // Delete a task (ensure the task belongs to the current user)
  deleteTask(taskId: string) {
    return this.auth.currentUser.then(user => {
      if (user) {
        return this.firestore.collection(this.collectionName).doc(taskId).delete();
      } else {
        throw new Error('User not authenticated');
      }
    });
  }
    }
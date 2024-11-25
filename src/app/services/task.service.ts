

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { todoItem } from "../models/todoItem.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    constructor(private firestore: AngularFirestore){

    }
    private collectionName = 'tasks';
    addTask(task:todoItem){
        return this.firestore.collection(this.collectionName).add(task);
    }
    getTasks(): Observable<todoItem[]> {
        return this.firestore
          .collection<todoItem>(this.collectionName)
          .valueChanges({ idField: 'id' }); // Adds Firestore's document ID to each task
      }
}
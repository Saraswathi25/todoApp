

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { todoItem } from "../models/todoItem.model";
import { Injectable } from "@angular/core";

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
}
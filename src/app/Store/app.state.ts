import { TaskReducer } from "../dashboard/store/task.reducer";
import { todoItem } from "../models/todoItem.model";
import { authReducer } from "../user_store/user.reducer";
import { User } from "../user_store/user.state";


export interface Appstate{
    task:todoItem,
    user:User
}

export const AppReducer={
    tasks :TaskReducer,
    auth: authReducer
}
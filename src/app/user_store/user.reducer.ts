import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import { loadUser, login, loginFailure, loginSuccess, logout } from "./user.action";

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(loginSuccess, (state, { user }) => ({
      ...state,
      user:user ?? null,
      loading: false,
      error: null,
    })),
    on(loginFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
      user:null
    })),
    on(loadUser,((state) =>{
      return{
        ...state,
      
      }
    })),
    on(logout,state=>({
      ...state,
      user:null
    }))
  );
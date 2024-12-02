import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";



export const selectUserState =createFeatureSelector<UserState>('auth');
export const selectUser =createSelector(selectUserState,(state)=> state.user)



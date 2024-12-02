import { createAction, props } from '@ngrx/store';
import { User } from './user.state';

export const login = createAction(
  '[Auth] Login',

);

export const loadUser =createAction(
  '[Auth] load User'
)

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User |null }>() 
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>() 
);
export const logout = createAction(
  '[Auth] Logout'
);

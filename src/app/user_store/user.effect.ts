import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';

import { catchError, from, map, mergeMap, of } from 'rxjs';
import { loadUser, login, loginFailure, loginSuccess } from './user.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private auth: AngularFireAuth) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login), 
      mergeMap((action) => {
        const provider = new GoogleAuthProvider();
        return this.auth.signInWithPopup(provider).then(
          (result) => {
            const user = result.user ? {
              id: result.user.uid,
              name: result.user.displayName || '',
              email: result.user.email || '',
              image: result.user.photoURL || '',
            } : null; 
            return loginSuccess({ user });
          }, 
          (error) => {
           
            return loginFailure({ error: error.message });
          }
        );
      })
    )
  );
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() =>
        from(this.auth.currentUser).pipe( // Ensure currentUser is resolved asynchronously
          map((user) => {
            if (user) {
              return loginSuccess({
                user: {
                  id: user.uid,
                  name: user.displayName || '',
                  email: user.email || '',
                  image: user.photoURL || '',
                },
              });
            } else {
              return loginFailure({ error: 'No user found' });
            }
          }),
          catchError((error) =>
            of(loginFailure({ error: error.message || 'Unknown error occurred' }))
          )
        )
      )
    )
  );
  
}

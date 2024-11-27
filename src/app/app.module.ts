import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ButtonComponent } from './components/button/button.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TaskComponent } from './components/task/task/task.component';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffect } from './store/task.effects';
import { TaskReducer } from './store/task.reducer';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonComponent,
    WelcomeComponent,
    TaskComponent,
    ProfileComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
   AngularFireModule.initializeApp(environment.firebaseConfig), 
   StoreModule.forRoot({tasks:TaskReducer}),
   EffectsModule.forRoot([TaskEffect]),
   StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: false,
    autoPause: true,
    features: {
      pause: false,
      lock: true,
      persist: true,
    },
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './profile/profile/profile.component';



const routes: Routes = [
 
  {
    path:'',component:WelcomeComponent
    
  },
  {
    path:'profile',component:ProfileComponent
    
  },
  {
    path:'dashboard',
    loadChildren:()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  }
  //profile
  //statics
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

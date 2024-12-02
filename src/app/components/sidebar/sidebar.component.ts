import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'; 
import { Store } from '@ngrx/store';
import { loadUser, login } from 'src/app/user_store/user.action';
import { selectUser } from 'src/app/user_store/user.selector';
import { User } from 'src/app/user_store/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  buttonItem: any;
  user$ !: Observable<User |null>;

 constructor(private auth: AngularFireAuth ,private store:Store) {}
  ngOnInit() {

   
    this.buttonItem = [
      { name: 'Welcome', icon: 'mdi:home', link: '' },
      { name: 'Dashboard', icon: 'mdi:view-dashboard', link: 'dashboard' },
      { name: 'Task', icon: 'mdi:check-circle' },
    ];
   
  
    this.user$ = this.store.select(selectUser);
   

  }

  onEmitlogin(name: any) {
    if (name === 'Login') {
     const provider = new GoogleAuthProvider();
     this.store.dispatch(login());
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  buttonItem: any;
 // private auth: Auth = inject(Auth); // Inject the Auth service using modular approach
 constructor(private auth: AngularFireAuth) {}
  ngOnInit() {
    this.buttonItem = [
      { name: 'Welcome', icon: 'mdi:home', link: '' },
      { name: 'Dashboard', icon: 'mdi:view-dashboard', link: 'dashboard' },
      { name: 'Task', icon: 'mdi:check-circle' },
      { name: 'Profile', icon: 'mdi:account-circle' },
      { name: 'Login', icon: 'mdi:account-circle' },
    ];
  }

  login() {
    const provider = new GoogleAuthProvider();
    this.auth
      .signInWithPopup(provider) // Using the legacy signInWithPopup method
      .then((result) => {
        console.log('User logged in:', result.user?.email);
      })
      .catch((error) => {
        console.error('Login error:', error.message);
      });
  }

  onEmitlogin(name: any) {
    if (name === 'Login') {
      this.login();
    }
  }
}

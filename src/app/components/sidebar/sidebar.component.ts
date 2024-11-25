import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  buttonItem: any;

  ngOnInit() {
    this.buttonItem = [
      { name: 'Welcome', icon: 'mdi:home',link:'' },
      { name: 'Dashboard', icon: 'mdi:view-dashboard',link:'dashboard' },
      { name: 'Task', icon: 'mdi:check-circle' },
      { name: 'Profile', icon: 'mdi:account-circle' }
    ];
  }
}

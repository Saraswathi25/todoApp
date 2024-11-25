import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  name="Create"
  icon="mdi:plus"
  isModalOpen:boolean=false;
  ngOnInit(){

  }
  openAddTask(){
    this.isModalOpen =!this.isModalOpen;
  }
  closeModal(e:boolean){
   this.isModalOpen =e;
  }
}

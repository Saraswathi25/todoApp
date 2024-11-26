import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Output()
   item: EventEmitter<any> =new EventEmitter<any>();

   onEmitItem(name:any){
    this.item.emit(name)
   }
 
}

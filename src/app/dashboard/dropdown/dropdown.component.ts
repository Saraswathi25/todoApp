import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{

  @Input()
  method: any
  @Output() filterChange = new EventEmitter<[string, string]>();

  selectedOption: string = '';
  ngOnInit(){
  
  }
  options: string[] = [];

  ngOnChanges() {
    if (this.method === 'Status') {
      this.options = ['Pending', 'Completed', 'In Progress'];
    } else if (this.method === 'Priority') {
      this.options = ['High', 'Medium', 'Low'];
    }
  }
  onSelectChange(target: EventTarget|null,method:string) {
    const selectElement = target as HTMLSelectElement; 
    const selectedValue = selectElement.value;
    
    this.filterChange.emit([selectedValue,method])
  
  }
}

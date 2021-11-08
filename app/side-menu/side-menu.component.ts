import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  category : string = "";

  @Output() categoryEmitter = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  setCategory(data : string){
    this.category=data;
    this.categoryEmitter.emit(this.category);
  }

}

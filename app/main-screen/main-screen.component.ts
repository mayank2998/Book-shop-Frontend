import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  isNavActive : boolean = true;
  constructor(private userService : UserNameService) { }

  ngOnInit(): void {
    this.userService.updateNavState(true);
  }

}

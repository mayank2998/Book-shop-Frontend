import { Component, Input, OnInit } from '@angular/core';
import { EcartService } from '../ecart.service';
import { EventEmitterService } from '../event-emitter.service';
import { cartData } from '../model';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-shopping-body',
  templateUrl: './shopping-body.component.html',
  styleUrls: ['./shopping-body.component.css']
})
export class ShoppingBodyComponent implements OnInit {

  totalItems ?:number =0;
  productIds:Array<number> = [];
  productList:Array<cartData> = [];
  category : string ="All";
  constructor(private productService : EcartService,private userService : UserNameService) { }

  ngOnInit(): void {
    this.loadData();
    this.userService.updateNavState(true);
  }

  cartUpdate(event ?: number){
    this.totalItems=event;
    console.log("count=",event);
  }

  getProductIds(event : Array<number>){
    this.productIds=event;
    console.log("data=",event);
  }
  
  setCategory(event : any){
    console.log(event);
    this.category=event;
    this.productService.getBookseByCategory(this.category).subscribe((data) => {
      console.log(data);
      this.productList = data;
     })
  }

  loadData(){
    this.productService.getData().subscribe((data) => {
      console.log(data);
      this.productList = data;
     })
  }

}

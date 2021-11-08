import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcartService } from '../ecart.service';
import { cartData } from '../model';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-shopping-products',
  templateUrl: './shopping-products.component.html',
  styleUrls: ['./shopping-products.component.css']
})
export class ShoppingProductsComponent implements OnInit {

  totalItems : number =0;
  descData = {} as cartData;
  @Input() productListByCategory:Array<cartData> = [];
  @Output() itemCounter = new EventEmitter();
  @Output() productData = new EventEmitter();

  productList : Array<cartData> = [];
   
  productIds:Array<number> = [];
  subscription: Subscription = new Subscription;

  constructor(private userService : UserNameService,private cartService : EcartService) { 
    
  }

  ngOnInit(): void {
    this.productList=this.productListByCategory;
    console.log(this.productList);
    this.subscription = this.userService.getTotalItems().subscribe((msg) => {
      this.totalItems=msg;
     
    });

    this.subscription = this.userService.getProductIds().subscribe((msg) => {
      this.productIds=msg;
     
    });

    this.subscription = this.userService.getProductList().subscribe((msg) => {
      this.productList=msg;
     
    });
    
  }

  


  incrementCart(id : number){
    this.totalItems = this.totalItems+1;
    this.userService.updateTotalItems(this.totalItems);
    // console.log("total products =",this.totalItems);
    // this.itemCounter.emit(this.totalItems);
    // console.log(id);
    this.productIds.push(id);
    this.userService.updateProductIds(this.productIds);
   
    // this.productData.emit(this.productIds);
  }

  ngOnChanges(){
    this.productList=this.productListByCategory;
    console.log(this.productList);
  }

  getProductDesc(id : number){
    this.cartService.getBooksById(id).subscribe((data) =>{
      this.descData=data;
    })
  }

}

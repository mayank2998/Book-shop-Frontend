import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EcartService } from '../ecart.service';
import { cartData } from '../model';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  adminProductIds : Array<number> =[];
  productIds : Array<number> =[];
  productList:Array<cartData> = [];
  cartList:Array<cartData> = [];
  totalCost:number =0;
  totalItems:number =0;
  isNavActive : boolean = false;
  productString ?: Array<string> =[];
  productId ?: string ="";
  subscription: Subscription = new Subscription;
  constructor(private router : Router,private activeRoute:ActivatedRoute,private cartservice : EcartService,
    private userService : UserNameService) { }

  ngOnInit(): void {
    this.totalCost=0;
    this.userService.updateNavState(false);
    this.subscription = this.userService.getProductIds().subscribe((msg) => {
     
      this.productIds=msg;

      for(let i=0;i<this.productIds.length;i++){

        this.cartservice.getBooksById(this.productIds[i]).subscribe((data) => {
          this.totalCost=data.price+this.totalCost;
           this.cartList.push(data);
        })
      }
      this.productList = this.cartList.slice();
      console.log(this.productList);
    });
    // this.activeRoute.params.subscribe(routeParams => {
      
    //   console.log("route params = ",routeParams[0]);
    //   // this.id=routeParams.id;
    //   console.log(typeof(routeParams));
    //   console.log(routeParams);
      
    //   console.log(routeParams.length);

     


    //   for(var key in routeParams){
    //     console.log("hi");
    //     this.cartservice.getBooksById(routeParams[key]).subscribe((data) =>{
    //       console.log(data);
    //       this.totalCost=data.price+this.totalCost;
    //       this.cartList.push(data);
    //     });
    //   }
    //   this.productList = this.cartList.slice();
    // });
  
  }

  checkOut(){
    this.productId = localStorage.getItem('productIds')?.toString();
    console.log(this.productId);
    console.log(typeof(this.productId));
     this.productString= this.productId?.split("[");
     console.log(this.productString);
     if(this.productString != undefined){
       this.productString = this.productString[1].split("]");
       this.productString = this.productString[0].split(',');
       for(var i=0;i<this.productString.length;i++){
        this.adminProductIds.push(Number(this.productString[i]));
      }
     }
     for(let i=0;i<this.productIds.length;i++){
      this.adminProductIds.push(this.productIds[i]);
    }
     
    localStorage.setItem("productIds", JSON.stringify( this.adminProductIds));
    this.userService.updateTotalItems(0);
    this.userService.updateProductIds([]);
    
    this.router.navigate(['/main']);
  }
  
  removeItems(id: number){
    for (var i = this.cartList.length - 1; i >= 0; --i) {
      if (this.cartList[i].pid == id) {
        this.totalCost=this.totalCost-this.cartList[i].price;
          this.cartList.splice(i,1);
          this.subscription = this.userService.getTotalItems().subscribe((msg) => {
            this.totalItems=msg;
          })
          this.userService.updateTotalItems(this.totalItems-1);
          
          break;
      }
      
  }
  for(var i=this.productIds.length-1;i>=0;i--){
    if(this.productIds[i]==id){
      this.productIds.splice(i,1);
      break;
    }
  }
  }

 

  ngOnDestroy(){
    
  }
}

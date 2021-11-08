import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EcartService } from '../ecart.service';
import { cartData } from '../model';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  subscription: Subscription = new Subscription;
  descId : number =0;
  productData = {} as cartData;
  productId ?: string ="";
  productString ?: Array<string> =[];
  productIds : Array<number> =[];
  cartData : Array<cartData> = [];
  totalCost : number =0;

  constructor(private userService : UserNameService,private cartService : EcartService) { }

  ngOnInit(): void {
    this.productId = localStorage.getItem('productIds')?.toString();
    console.log(this.productId);
    console.log(typeof(this.productId));
     this.productString= this.productId?.split("[");
     console.log(this.productString);
     if(this.productString != undefined){
       this.productString = this.productString[1].split("]");
       this.productString = this.productString[0].split(',');
       
       for(var i=0;i<this.productString.length;i++){
         this.productIds.push(Number(this.productString[i]));
       }
       for(let i=0;i<this.productIds.length;i++){
        
        this.cartService.getBooksById(this.productIds[i]).subscribe((data) => {
          this.totalCost=data.price+this.totalCost;
           this.cartData.push(data);
        })
      }
     }

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EcartService } from '../ecart.service';
import { UserNameService } from '../user-name.service';
import { cartData } from '../model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isNavActive : boolean = true;
  userName ?: string="";
  subscription: Subscription = new Subscription;
  productList : Array<cartData> = [];
  @Input() totalItems ?:number;
  @Input() productIds :Array<number> = [];
  isAdmin ?: string ="";
  isUserEmpty : boolean = false;
  
  searhForm : FormGroup


  constructor(private router:Router,private userService :UserNameService,private ecartservice : EcartService) {
   
    this.searhForm = new FormGroup({
      'searchval': new FormControl('', [Validators.required]) 
    })
   }

  ngOnInit(): void {
    
  
    // this.subscription = this.userService.getMessage().subscribe((msg) => {
    //   console.log(this.userName);
    //   this.userName=msg;
      
    // });
    this.isAdmin=localStorage.getItem('admin')?.toString();
    console.log(this.isAdmin);
    this.userName=localStorage.getItem("userName")?.toString();
    if(this.userName?.match("")){
      console.log("hi");
      this.isUserEmpty=true;
    }
    else{
      this.isUserEmpty=false;
    }
    this.subscription = this.userService.getTotalItems().subscribe((msg) => {
      this.totalItems=msg;
     
    });
    this.subscription = this.userService.getProductIds().subscribe((msg) => {
      this.productIds=msg;
      console.log(this.productIds);
    });
    this.subscription = this.userService.getNavState().subscribe((msg) => {
      this.isNavActive=msg;
      console.log(this.productIds);
      
      if(!this.isNavActive){
        this.searhForm.controls['searchval'].disable();
      }
      else{
        this.searhForm.controls['searchval'].enable();
      }
    });
    
    
  }

  cart(){
    this.router.navigate(['/main/shopping-cart'],{ skipLocationChange: false });
  }

  public ngOnDestroy(): void {
  
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  submitdata(){
    this.ecartservice.getBookseByName(this.searhForm.value.searchval).subscribe((data) =>{
      this.productList=data;
      this.userService.updateProductList(this.productList);
      console.log(this.searhForm.controls['searchval']);
    })
  }

  setCategory(data : string){
    this.ecartservice.getBookseByCategory(data).subscribe((data)=>{
      this.productList=data;
      this.userService.updateProductList(this.productList);
    })
  }
 
  logout(){
    localStorage.removeItem('userName');
    this.userService.updateTotalItems(0);
    this.userService.updateProductIds([]);
    this.router.navigate([''],{ skipLocationChange: false });
  }
  totalSale(){
    
    this.router.navigate(['/main/description'],{ skipLocationChange: false });
  }
}

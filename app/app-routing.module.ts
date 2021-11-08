import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingBodyComponent } from './shopping-body/shopping-body.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingProductsComponent } from './shopping-products/shopping-products.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "main",
    component : MainScreenComponent,
    children :[
      {
        path : "",
        component : ShoppingBodyComponent,
        // children :[
        //   {
        //     path : "",
        //     component : ShoppingProductsComponent
        //   }
        // ]
      },
      {
        path : "shopping-cart",
        component : ShoppingCartComponent
      },
      {
        path : "check-out",
        component : CheckOutComponent
      },
      {
        path: "description",
        component : ProductDetailsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

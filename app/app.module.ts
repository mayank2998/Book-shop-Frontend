import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingBodyComponent } from './shopping-body/shopping-body.component';
import { ShoppingProductsComponent } from './shopping-products/shopping-products.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { EventEmitterService } from './event-emitter.service';
import { UserNameService } from './user-name.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    MainScreenComponent,
    RegisterComponent,
    ShoppingBodyComponent,
    ShoppingProductsComponent,
    SideMenuComponent,
    TopbarComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EventEmitterService,UserNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

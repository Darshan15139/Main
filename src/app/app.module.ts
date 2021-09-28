import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductTabComponent } from './Components/product-tab/product-tab.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    ProductTabComponent,
    SignUpComponent,
    CartComponent,
    CheckoutComponent,
    PageLayoutComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

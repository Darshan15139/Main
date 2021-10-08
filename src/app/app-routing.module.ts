import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductTabComponent } from './Components/product-tab/product-tab.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
import { BillingComponent } from './Components/billing/billing.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { SellerformComponent } from './Components/sellerform/sellerform.component';


const routes: Routes = [
  {path: '',component: PageLayoutComponent},
  // {path: 'head', component: HeaderComponent},
  // {path: 'foot', component: FooterComponent},
  {path: '', redirectTo:'page-layout', pathMatch:'full'},

  {path: 'product-tab', component: ProductTabComponent},
  {path: 'product-page', component: ProductPageComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'thankyou', component: ThankYouComponent},
  {path: 'form', component: SellerformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

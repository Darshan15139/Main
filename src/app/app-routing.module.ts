import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductTabComponent } from './Components/product-tab/product-tab.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
const routes: Routes = [
  {path: 'Home',component: PageLayoutComponent},
  {path: 'head', component: HeaderComponent},
  {path: 'foot', component: FooterComponent},
  {path: '', component: ProductTabComponent},
  {path: '', component: SignUpComponent},
  {path: '', component: CartComponent},
  {path: '', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

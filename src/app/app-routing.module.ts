import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductTabComponent } from './Components/product-tab/product-tab.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: '', component: FooterComponent},
  {path: '', component: ProductTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './../../Services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    // this.checkoutService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.checkoutService.getTotalPrice();
    // })
  }

}

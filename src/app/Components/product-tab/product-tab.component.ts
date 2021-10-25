import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/Services/appservice.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.css']
})
export class ProductTabComponent implements OnInit {
public productList : any;
public filterCategory : any
  searchKey:string ="";
  constructor(private api : AppserviceService, private cartService : CartService) { }

  ngOnInit(): void {
this.api.getProduct()
  .subscribe(res => {
    this.productList = res;
    this.filterCategory = res;
    this.productList.forEach((a:any) => {
      // if(a.category ==="women's clothing" || a.category ==="men's clothing"){
      //   a.category ="fashion"
      // }
      Object.assign(a,{quantity:1,total:a.price});
    });
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}

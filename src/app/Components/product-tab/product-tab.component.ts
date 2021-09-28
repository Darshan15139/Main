import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/Services/appservice.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.css']
})
export class ProductTabComponent implements OnInit {
public productList : any;
  constructor(private api : AppserviceService) { }

  ngOnInit(): void {
this.api.getProduct()
  .subscribe(res => {
    this.productList = res;
  });
  }
}

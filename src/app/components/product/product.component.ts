import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { timeStamp } from 'node:console';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[]
  apiUrl = "https://localhost:44344/api/products";
  productResponseModel:ProductResponseModel={
    data:this.products,
    message:"",
    succes:true

  }
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getProduct();

  }
  getProduct() {

    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response => { 

    

    }));
  }

  
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../shared/services/http-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit  {
   
  allProdArray: any[] = [];
  totalPrice: number = 0;
  prodListArray: any[] = [];

  @ViewChild('myInputValue') myInputEleObj : ElementRef | undefined;

  constructor(private httpServ : HttpService){}
  ngOnInit(): void{
    this.getAllProductsData();
  }
  getAllProductsData(){
    this.httpServ.getProducts().subscribe({
      next:(param : any)=>{
        console.log(param);
        this.allProdArray = param;
      }
    })
}

increment(product: any){
  if(product.productQuantity != 5){
    product.productQuantity++
  }
}

decrement(product: any){
  if(product.productQuantity != 0){
    product.productQuantity -= 1
  }
}

onClick(products: any){
  const orderPrice = products.productPrice * products.productQuantity
  this.prodListArray.push({tPrice : orderPrice, ...products}) 
  this.totalPrice = this.prodListArray.reduce((total,prod)=> total + prod.tPrice, 0);
}

onDelete(product : any){
      this.prodListArray.splice(product,1)
}
}


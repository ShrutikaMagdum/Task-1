import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable()

export class HttpService{
    constructor(private http : HttpClient) { }
       
    postProduct(productData : any){
        this.http.post('https://task-1-angular-default-rtdb.firebaseio.com/product.json', productData).subscribe({
            next : (param : any) => {
                console.log(param);
            },
        })

    }
     
getProducts(): Observable<any> {
    return this.http.get<any[]>('https://task-1-angular-default-rtdb.firebaseio.com/product.json').pipe(map((prod: any) => {
        const myProdArr = []
        for(let prodId in prod) {
            myProdArr.push({ ...prod[prodId] });
        }
        return myProdArr
}));
}
}

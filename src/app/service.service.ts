import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }
  chercher_Shops(Category:any): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Shop/shops/category/'+Category);
  } 
  chercher_ShopsByProduct(productId:any): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Shop/shops/product/'+productId);
  } 
  get_categories(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Category/categories');
  }
  get_products(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Product/products');
  }
  get_shops(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Shop/shops');
  }
  get_reduction(): Observable<any> {
    return this.http.get<any[]>('http://localhost:9090/api/mall-1/Reduction/reductions');
  }
}


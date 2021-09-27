import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3000/product"; 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000, 
      horizontalPosition: "right", 
      verticalPosition: "top"
    })
  }
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseURL, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url)
  }
  update(product: Product): Observable<Product>{
    const url = `${this.baseURL}/${product._id}`; 
    return this.http.patch<Product>(url, product); 
  }

  delete(product: Product): Observable<Product>{
    const url = `${this.baseURL}/${product._id}`; 
    return this.http.delete<Product>(url); 
  }
}


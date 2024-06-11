import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL : string = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {
   
   }

   getAll (): Observable<any>{
    return this.http.get(this.baseURL);
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(this.baseURL + id);
  }

  saveProduto(produto: any): Observable<any>{
    return this.http.post(this.baseURL, produto)
  }

  updateProuto(produto: any): Observable<any>{
    return this.http.post(this.baseURL, produto)
  }

  delete(id:number): void{
    this.http.delete(this.baseURL + id);
  }


}

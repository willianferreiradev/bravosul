import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = `${environment.api}products`;

  constructor(private http: HttpClient) { }

  index(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  getCount(id: number): Observable<number> {
    return this.http.get<number>(`${this.API}/count`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.API}`, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/${id}`);
  }
}

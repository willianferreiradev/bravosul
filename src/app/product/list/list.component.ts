import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.service.index();
  }

}

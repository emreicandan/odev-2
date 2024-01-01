import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

    products:Product[]=[]

    constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.getList()
  }
    getList(){
      return this.productService.getAll().subscribe(result=>{
          this.products=result
      })
    }
}

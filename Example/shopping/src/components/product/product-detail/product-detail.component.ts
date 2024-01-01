import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import {NgIconComponent , provideIcons} from '@ng-icons/core'
import {heroArrowUp ,heroArrowDown} from '@ng-icons/heroicons/outline'
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../../../services/basket.service';



@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule , NgIconComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  viewProviders: [provideIcons({ heroArrowUp,heroArrowDown})]
})
export class ProductDetailComponent implements OnInit {
    basket:Product[]=[]
    productDetail:Product[]=[]
    constructor(private productService:ProductService , private activatedRoute:ActivatedRoute , private basketService:BasketService){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.getProductDetail(params["id"])
    })
  }

    getProductDetail(id:number){
      this.productService.getById(id).subscribe(result=>{
        this.productDetail=result
      })
    }

    inCrease(){
     let piece=this.productDetail.map(item=> item.piece++)
     return piece
    }
    deCrease(){
      let piece=this.productDetail.map(item=> item.piece>0?item.piece--:item.piece)
      return piece
    }

    addBasket(){
      this.productDetail.map(product=>{
        this.basketService.addBasket(product)
      })

    }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NgIconComponent , provideIcons} from '@ng-icons/core'
import { Product } from '../models/product';
import { BasketService } from '../services/basket.service';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders:[provideIcons({heroShoppingCart})]
})
export class AppComponent implements OnInit{
  total:number=0
  basketPiece:Product[]=[];
  constructor(private basketService:BasketService){}
  ngOnInit(): void {
    this.getBasketPiece();
  }
  getBasketPiece(){
    this.basketPiece=this.basketService.getBasketItems();
    return this.basketPiece;
  }
}

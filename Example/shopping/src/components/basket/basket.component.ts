import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { BasketService } from '../../services/basket.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit{
  basketItems:Product[]=[];
  constructor(private basketService:BasketService , private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getBasketList();
  }
  getBasketList(){
    this.basketItems=this.basketService.getBasketItems();
    return this.basketItems
  }
}

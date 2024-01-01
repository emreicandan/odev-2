import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { ProductDetailComponent } from '../components/product/product-detail/product-detail.component';
import { BasketComponent } from '../components/basket/basket.component';

export const routes: Routes = [
    {path:"",component:ProductComponent},
    {path:"products/:id",component:ProductDetailComponent},
    {path:'basket',component:BasketComponent}
];

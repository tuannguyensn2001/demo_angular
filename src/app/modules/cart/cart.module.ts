import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './pages/cart/cart.component';
import {RouterModule, Routes} from "@angular/router";
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {AppModule} from "../../app.module";
import {HeaderComponent} from "../../components/header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {AuthGuard} from "../../auth.guard";


const routes: Routes = [
  {path: 'cart', component: CartComponent, canLoad: [AuthGuard]}
]


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    MatButtonModule,
  ]
})
export class CartModule {
}

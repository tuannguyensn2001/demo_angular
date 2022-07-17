import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,private router : Router,private authService : AuthService) {
  }

  ngOnInit(): void {
    // if (!this.authService.isAuth()) {
    //   this.router.navigate(["auth/login"])
    // }
  }

  getList() {
    return this.cartService.getList()
  }

  deleteItemInCart(product_id: number) {
    this.cartService.removeToCart(product_id)
  }

}

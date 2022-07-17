import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../modules/auth/services/auth.service";
import {CartService} from "../../modules/cart/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  isAuth() {
    return this.authService.isAuth()
  }

  getUser() {
    return this.authService.getUser()
  }

  getNumberItemInCart() {
    return this.cartService.getNumberItem()
  }

}

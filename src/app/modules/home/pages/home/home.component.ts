import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../../../shared/models/product/IProduct";
import {ResponseType} from "../../../../shared/models/common";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private isLoading = false;
  public products: IProduct[] = []

  constructor(private authService: AuthService, private httpClient: HttpClient, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.httpClient.get<ResponseType<IProduct[]>>('http://localhost:8000/api/v1/products')
      .subscribe(data => {
        this.products = data.data
      })
  }

  isAuth() {
    return this.authService.isAuth()
  }

  addToCart(id: number) {
    this.cartService.addToCart(id)
  }
}

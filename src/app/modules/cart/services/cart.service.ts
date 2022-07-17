import {Injectable} from '@angular/core';
import {CartItem} from "../../../shared/models/cart/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public list: CartItem[] = []

  constructor() {
  }

  addToCart(product_id: number) {
    const check = this.list.find(item => item.product_id === product_id);
    if (!check) {
      this.list.push({
        product_id: product_id,
        quantity: 1
      })
    } else {
      check.quantity++
    }
  }

  removeToCart(product_id: number) {
    this.list = this.list.filter(item => item.product_id !== product_id)
  }

  getNumberItem() {
    return this.list.length
  }

  getList() {
    return this.list
  }
}

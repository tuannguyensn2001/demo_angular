import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() product_id: number = -1
  @Input() quantity: number = 0
  @Output() removeCart = new EventEmitter<number>()

  constructor() {

  }

  ngOnInit(): void {
  }

  handleClickDelete() {
    this.removeCart.emit(this.product_id)
  }

}

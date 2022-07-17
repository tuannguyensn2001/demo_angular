import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() name: string = 'init'
  @Input() id: number = -1
  @Output() addToCart = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClickAddToCart() {
    this.addToCart.emit(this.id)
  }


}

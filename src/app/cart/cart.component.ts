import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  //注入服务实例
  constructor(private cartService: CartService) {
    window.alert(cartService.getItems()[0].price);
  }
}

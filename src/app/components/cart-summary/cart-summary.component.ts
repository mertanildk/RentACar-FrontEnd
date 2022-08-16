import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { CartItems } from './../../models/cartItems';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CarDetailDTO } from 'src/app/models/carDetailDTO';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]

  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(car:CarDetailDTO){
    this.cartService.removeFromCart(car)
    this.toastrService.error("Silindi",car.modelName)

  }


}

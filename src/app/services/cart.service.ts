import { CartItems } from './../models/cartItems';
import { Injectable } from '@angular/core';
import { CarDetailDTO } from '../models/carDetailDTO';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  addToCart(car:CarDetailDTO){
    let item = CartItems.find((c)=>c.carDetailDTO.id===car.id)
    if(item){

    }else{
      let cartItem = new CartItem();
      cartItem.carDetailDTO=car;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(car:CarDetailDTO){
    let item = CartItems.find((c)=>c.carDetailDTO.id===car.id)
    if(item!=null){
      CartItems.splice(CartItems.indexOf(item),1);
    }

  }
  list():CartItem[]{
    return CartItems;
  }


}

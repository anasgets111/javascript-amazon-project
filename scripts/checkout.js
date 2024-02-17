import { cart } from "../data/cart.js";
import { renderOrderSummery } from "./checkout/orderSummery.js";
import { renderPaymentSummery } from "./checkout/paymentSummery.js";
renderOrderSummery();
renderPaymentSummery();

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-items-no").innerHTML = `${cartQuantity} items`;
  return cartQuantity;
}

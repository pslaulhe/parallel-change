import { ShoppingCart } from "./ShoppingCart";

export class ImagineThisIsAClientInADifferentRepository {
  FormattedPrice = () => {
    var cart = new ShoppingCart();
    cart.addItems(10);
    return `Total price is ${cart.calculateTotalPrice()} euro`;
  };
}

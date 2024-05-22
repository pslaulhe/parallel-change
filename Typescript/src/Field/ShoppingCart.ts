export class ShoppingCart {
  price = 0;

  add = (price: number) => (this.price = price);

  addItems = (...prices: number[]) => (this.price = prices.reduce((x, y) => x + y))

  calculateTotalPrice = () => this.price;

  numberOfProducts = () => 1;

  hasDiscount = () => this.price > 100;
}

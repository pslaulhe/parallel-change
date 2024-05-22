export class ShoppingCart {
  price = 0;
  newPrices: number[] = [];

  add = (price: number) => (this.price = price);

  addItems = (...prices: number[]) => (this.newPrices = prices)

  calculateTotalPrice = () => this.price;

  calculateNewTotalPrice = () => this.newPrices.reduce((x, y) => x + y);

  numberOfProducts = () => 1;

  numberOfProductsNew = () => this.newPrices.length;

  hasDiscount = () => this.price > 100;
}

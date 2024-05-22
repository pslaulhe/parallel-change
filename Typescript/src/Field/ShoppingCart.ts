export class ShoppingCart {
  newPrices: number[] = [];

  addItems = (...prices: number[]) => (this.newPrices = prices)

  calculateTotalPrice = () => this.newPrices.reduce((x, y) => x + y);

  numberOfProducts = () => this.newPrices.length;

  hasDiscount = () => this.newPrices.filter(x => x > 100).length > 0;
}

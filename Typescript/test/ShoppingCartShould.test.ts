import { ShoppingCart } from "../src/Field/ShoppingCart";

describe("shopping cart", () => {
  let cart: ShoppingCart;
  beforeEach(() => (cart = new ShoppingCart()));

  it("calculates the final price for multiple items", () => {
    cart.addItems(10, 15, 13);

    expect(cart.calculateTotalPrice()).toBe(38);
  });

  it("knows the number of multiple items", () => {
    cart.addItems(10, 15, 13);

    expect(cart.numberOfProducts()).toBe(3);
  });

  it("may offer discounts when there is at least one expensive product", () => {
    cart.addItems(120, 30, 50);

    expect(cart.hasDiscount()).toBeTruthy();
  });

  it("does not offer discount for cheap products", () => {
    cart.addItems(10, 30, 50);

    expect(cart.hasDiscount()).toBeFalsy();
  });
});

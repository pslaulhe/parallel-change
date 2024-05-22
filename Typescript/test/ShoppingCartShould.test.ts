import { ShoppingCart } from "../src/Field/ShoppingCart";

describe("shopping cart", () => {
  let cart: ShoppingCart;
  beforeEach(() => (cart = new ShoppingCart()));

  it("calculates the final price", () => {
    cart.add(10);

    expect(cart.calculateTotalPrice()).toBe(10);
  });

  it("calculates the final price for multiple items", () => {
    cart.addItems(10, 15, 13);

    expect(cart.calculateTotalPrice()).toBe(38);
  });

  it("knows the number of items", () => {
    cart.add(10);

    expect(cart.numberOfProducts()).toBe(1);
  });

  it("may offer discounts when there is at least one expensive product", () => {
    cart.add(120);

    expect(cart.hasDiscount()).toBeTruthy();
  });

  it("does not offer discount for cheap products", () => {
    cart.add(10);

    expect(cart.hasDiscount()).toBeFalsy();
  });
});

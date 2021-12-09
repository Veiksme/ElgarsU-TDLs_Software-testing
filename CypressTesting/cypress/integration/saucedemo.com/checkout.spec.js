/// <reference types="Cypress" />
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductsPage } from "../../pageObjects/pages/ProductsPage";
import { CartPage } from "../../pageObjects/pages/CartPage";
import { CheckoutPage } from "../../pageObjects/pages/CheckoutPage";

describe("Checkout test cases", () => {
  it("Adding item to cart and checking out", () => {
    LoginPage.loginWithUI();
    ProductsPage.addFirstItemToCart();
    ProductsPage.verifyRemoveButton();
    ProductsPage.goToCart();
    CartPage.verifyAddedItem();
    CartPage.goToCheckout();
    CheckoutPage.enterUserData();
    CartPage.verifyAddedItem();
    CheckoutPage.finishCheckoutAndVerifyMessage();
  });
});

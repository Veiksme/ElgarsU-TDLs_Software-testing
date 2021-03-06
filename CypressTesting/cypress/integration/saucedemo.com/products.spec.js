/// <reference types="Cypress" />
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductsPage } from "../../pageObjects/pages/ProductsPage";

describe("Products page test cases", () => {
  it("Sorting items by price low - high", () => {
    LoginPage.loginWithUI();
    ProductsPage.sortItemsBy("lohi");
    ProductsPage.verifyLowToHighPrices();
  });
});

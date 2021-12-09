/// <reference types="Cypress" />
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductsPage } from "../../pageObjects/pages/ProductsPage";

describe("Login test cases", () => {
  it("Log in with standard user and verify login status", () => {
    LoginPage.loginWithUI();
    ProductsPage.verifyUserLoggedIn();
  });
});

import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductsPage } from "../../pageObjects/pages/ProductsPage";

const username = "standard_user";
const password = "secret_sauce";

describe("Login test cases", () => {
  it("Log in with standard user and verify login status", () => {
    LoginPage.loginWithUI(username, password);
    ProductsPage.verifyUserLoggedIn();
  });
});

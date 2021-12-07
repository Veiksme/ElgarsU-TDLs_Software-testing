import { LoginPage } from "../../pageObjects/pages/LoginPage"
import { ProductsPage } from "../../pageObjects/pages/ProductsPage"
import { CartPage } from "../../pageObjects/pages/CartPage"

describe("Checkout test cases", () =>{
    it("Adding item to cart", () => {
    //LoginPage.loginWithUi()
    LoginPage.loginWithUI("standard_user")
    ProductsPage.addFirstItemToCart()
    ProductsPage.goToCart();
    CartPage.verifyAddedItem();
})
})
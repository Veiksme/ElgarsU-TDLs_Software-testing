import { LoginPage } from "../../pageObjects/pages/LoginPage"
import { ProductsPage } from "../../pageObjects/pages/ProductsPage"

let loginUsername = "standard_user"


describe("Login test cases", () => {
    it("Log in with standard user", () => {
        LoginPage.loginWithUI(loginUsername)
        ProductsPage.verifyUserLoggedIn()
    })
})


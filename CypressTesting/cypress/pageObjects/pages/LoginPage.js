/// <reference types="Cypress" />
import { BasePage } from "../BasePage";

const USERN_FIELD = "#user-name";
const PASSWORD_FIELD = "[data-test=password]";
const SUBMIT_LOGIN_BUTTON = ".submit-button";
const username = "standard_user";
const password = "secret_sauce";
const LOGIN_ERROR = "[data-test=error]";

export class LoginPage extends BasePage {
  static loginWithUI() {
    cy.visit("www.saucedemo.com");
    this.type(USERN_FIELD, username);
    this.type(PASSWORD_FIELD, password);
    this.click(SUBMIT_LOGIN_BUTTON);
  }
}

/// <reference types="Cypress" />
import { BasePage } from "../BasePage";

const USERNAME_FIELD = "#user-name";
const PASSWORD_FIELD = "[data-test=password]";
const SUBMIT_LOGIN_BUTTON = ".submit-button";
const username = "standard_user";
const password = "secret_sauce";
const LOGIN_ERROR = "[data-test=error]";

export class LoginPage extends BasePage {
  static loginWithUI(user = "error_user") {
    cy.visit("/");
    cy.fixture("testingUsers").then((fixture) => {
      this.type(USERNAME_FIELD, fixture[user].username);
      this.type(PASSWORD_FIELD, fixture[user].password);
    });
    this.click(SUBMIT_LOGIN_BUTTON);
  }
}

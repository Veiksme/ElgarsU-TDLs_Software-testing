/// <reference types="Cypress" />
import { BasePage } from "../BasePage";

const FIRST_NAME_BOX = "#first-name";
const LAST_NAME_BOX = "#last-name";
const ZIP_CODE_BOX = "#postal-code";
const first_name = "Janis";
const last_name = "Berzins";
const zip_code = "LV1001";
const CONTINUE_BUTTON = "#continue";
const CHECKOUT_THANK_YOU_MESSAGE = ".complete-header";
const FINISH_BUTTON = "#finish";

export class CheckoutPage extends BasePage {
  static enterUserData() {
    this.type(FIRST_NAME_BOX, first_name);
    this.type(LAST_NAME_BOX, last_name);
    this.type(ZIP_CODE_BOX, zip_code);
    this.click(CONTINUE_BUTTON);
  }

  static finishCheckoutAndVerifyMessage() {
    this.click(FINISH_BUTTON);
    this.hasText(CHECKOUT_THANK_YOU_MESSAGE, "THANK YOU FOR YOUR ORDER");
  }
}

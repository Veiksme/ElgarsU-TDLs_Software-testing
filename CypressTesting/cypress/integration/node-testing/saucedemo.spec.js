describe("Day 1 example of E2E tests", () => {
  //Logging into a web page
  it("Logging in with a standart user", () => {
    cy.visit("/");
    //2nd to best way of writing unique selectors, ids should be unique per page
    //And they are usually not changed often
    cy.get("#user-name").type("standard_user");
    //Best way to find elements with, added by QAs , will never change unless somebody hates you
    cy.get("[data-test=password]").type("secret_sauce");
    //Class name, not the best approach , suspectable to change quite frequently
    cy.get(".submit-button").click();
    cy.get(".inventory_item").should("be.visible");
  });
});

describe("Missing user error in login page", () => {
  //Logging into a web page
  it("Logging in with a standart user", () => {
    cy.visit("/");
    //
    cy.get("#user-name").type("locked_out_user");
    //Best way to find elements with, added by QAs , will never change unless somebody hates you
    //cy.get("[data-test=password]").type("secret_sauce");
    //Class name, not the best approach , suspectable to change quite frequently
    cy.get(".submit-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});

describe("Missing password error in login page", () => {
  //Logging into a web page
  it("Logging in with a standart user", () => {
    cy.visit("/");
    //
    //cy.get("#user-name").type("locked_out_user");
    //Best way to find elements with, added by QAs , will never change unless somebody hates you
    //cy.get("[data-test=password]").type("secret_sauce");
    //Class name, not the best approach , suspectable to change quite frequently
    cy.get(".submit-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });
});

describe("Missing password error in login page", () => {
  //Logging into a web page
  it("Logging in with a standart user", () => {
    cy.visit("/");
    //
    cy.get("#user-name").type("SDfd");
    //
    cy.get("[data-test=password]").type("fsdfdsfs");
    //
    cy.get(".submit-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});

describe("Cookies test!", () => {
  //Logging into a web page
  it("Logging in with a standart user", () => {
    cy.visit("/");
    //
    cy.get("#user-name").type("standard_user");
    //
    cy.get("[data-test=password]").type("secret_sauce");
    //
    cy.get(".submit-button").click();
    //Check cookies
    cy.getCookie("session-username").then((cookie) => {
      expect(cookie.value).to.eq("standard_user");
    });
  });
});

describe("Login with cookies", () => {
  it("Starting the test case without logging in with UI", () => {
    cy.setCookie("session-username", "standard_user");
    cy.visit("/inventory.html", {
      failOnStatusCode: false,
    });
  });

  it.only("Showcasing cypress commands", () => {
    cy.login("standard_user");
  });
});

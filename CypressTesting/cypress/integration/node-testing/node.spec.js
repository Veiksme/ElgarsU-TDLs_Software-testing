/// <reference types="Cypress" />
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number % 3 === 0) {
    return "fizz";
  }
  if (number % 5 === 0) {
    return "buzz";
  }
  return "Not a multiple of 3 or 5";
}

function validateFizzBuzz(array, expected) {
  array.forEach((number) => {
    expect(fizzBuzz(number)).to.eq(expected);
  });
}

describe.skip("Fizz buzz unit test cases", () => {
  //Mocha hooks
  before(() => {
    cy.log("Running only once before the test case");
  });

  beforeEach(() => {
    cy.log("Running before each test case");
  });

  after(() => {
    cy.log("Runs after the test cases");
  });

  afterEach(() => {
    cy.log("Runs after each of the test case");
  });

  it("Returns fizz if number is a multiple of 3", () => {
    validateFizzBuzz([3, 6, 9, 12], "fizz");
  });

  it("Returns buzz if number is a multiple of 5", () => {
    validateFizzBuzz([5, 10, 20, 25], "buzz");
  });

  it("Returns fizzbuzz if number is a multiple of 5 and 3", () => {
    validateFizzBuzz([15, 30, 45, 60], "fizzbuzz");
  });
});

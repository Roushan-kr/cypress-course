// Its recommend to have a modular structure for your tests not nessary it need to be small
// spec mean test file
describe("Fundamentals test", () => {

  // beforeEach will run before each test now no need to repeat cy.visit
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("contain correct header ", () => {
    // cy.visit('http://localhost:3000/fundamentals') // before conf baseurl
    // cy.visit("/fundamentals"); // after confg baseurl
    // cy.get('[data-test="fundamental_header"]').contains(/Testing Fundamentals/i)
    // cy.get('[data-test="fundamental_header"]').should('have.text', 'Testing Fundamentals')

    // // orignal way to select element
    // cy.get('[data-test="fundamental_header"]').should(
    //   "contain.text",
    //   "Testing Fundamentals"
    // );

    // using custom command
    cy.getDataTest("fundamental_header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  // only only after it(indivusal test) will run only this test
  // it.only("Accordian works correctly", () => {

  it("Accordian works correctly", () => {
    // cy.visit("/fundamentals");
    cy.contains(/Your tests will exist in a describe block. /i).should(
      "not.be.visible"
    );
    cy.get('[data-test=accordian-itm-1] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block. /i).should(
      "be.visible"
    );
    cy.get('[data-test=accordian-itm-1] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block. /i).should(
      "not.be.visible"
    );
  });
});


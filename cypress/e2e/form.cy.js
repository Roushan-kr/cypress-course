
describe("Form test", () => {
    beforeEach(() => {
        cy.visit("/forms");
    });
    it("form heading", () => {
        cy.get("h1").should("have.text", "Testing Forms");
    });
    // it("should type in form", () => {
    //     cy.get("input").should("have.value", "");
    //     cy.get("input").type("words").should("have.value", "words").wait(1000).clear().should("have.value", ""); // wait is not recommended
    // });
    it("test subscribe", () => {
        // creating a type alias for the form
        cy.getDataTest("subscribe_form").find("input").as("email");
        cy.get("@email").type("test@t.com");
        cy.contains(/Successfully subbed: test@t.com/i).should("not.exist");
        cy.getDataTest("subscribe_button").click();
        cy.contains(/Successfully subbed: test@t.com/i).should("exist");
        cy.getDataTest("subscribe_message").should("contain", "Successfully subbed:");
        cy.wait(3000);
        cy.get("@email").clear().should("have.value", "");
        cy.getDataTest("subscribe_button").click();
        cy.contains(/Invalid email:/i).should("exist");
    });
});
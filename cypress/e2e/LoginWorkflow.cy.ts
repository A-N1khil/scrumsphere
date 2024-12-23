describe("Login Workflow", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should render login page", () => {
    cy.get("#userId-label").contains("User ID");
  });
});

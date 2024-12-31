describe("Modal open workflow", () => {
  beforeEach(() => {
    cy.visit("/tasks");
  });
  it("should have tasks list populated", () => {
    cy.get('[data-testid="676eeddaf5264633ed8421ba"]').should("exist");
  });
  it("should open modal on task click", () => {
    cy.get('[data-testid="modal-TASK-1"')
      .should("exist")
      .click()
      .then(() => cy.get('[data-testid="edit-task-button"]').should("exist"));
  });
});

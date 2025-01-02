const projectIds: string[] = [
  "67760b4f457ce4cc88abf063",
  "67760b4f457ce4cc88abf064",
  "67760b4f457ce4cc88abf065",
  "67760b4f457ce4cc88abf066",
  "67760b4f457ce4cc88abf067",
  "67760b4f457ce4cc88abf068",
  "67760b4f457ce4cc88abf069",
  "67760b4f457ce4cc88abf06a",
  "67760b4f457ce4cc88abf06b",
  "67760b4f457ce4cc88abf06c",
];

describe("Project Workflow", () => {
  beforeEach(() => {
    cy.visit("/home/projects");
  });
  it("should have tasks list populated", () => {
    projectIds.forEach((id) => {
      cy.get(`[data-testid="${id}"]`).should("exist");
    });
  });
  xit("should open modal on task click", () => {
    cy.get('[data-testid="modal-PROJ-1"')
      .should("exist")
      .click()
      .then(() => cy.get('[data-testid="edit-task-button"]').should("exist"));
  });
});

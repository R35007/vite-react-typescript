describe('Vite React Typescript Template Test Suite', () => {
  it('should navigate to about page', () => {
    cy.visit('/');
    cy.findByRole('heading', { level: 5 }).should('contain.text', 'Home Page');
    cy.get('button>a:contains("About")').click();
    cy.findByRole('heading', { level: 5 }).should('contain.text', 'About Page');
  });

  it('should perform counter operations', () => {
    cy.visit('/');

    cy.findByRole('button', { name: 'Decrement' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');

    cy.findByRole('button', { name: 'Increment' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.get('input.MuiInput-input').clear().type('5');
    cy.findByRole('button', { name: 'Increment By Value' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 5');

    cy.get('input.MuiInput-input').clear().type('-5');
    cy.findByRole('button', { name: 'Increment By Value' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.findByRole('button', { name: 'Decrement Async' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');

    cy.findByRole('button', { name: 'Increment Async' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.get('input.MuiInput-input').clear().type('5');
    cy.findByRole('button', { name: 'Increment Async By Value' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 5');

    cy.get('input.MuiInput-input').clear().type('-5');
    cy.findByRole('button', { name: 'Increment Async By Value' }).click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');
  });

  it('should count value persist on routing', () => {
    cy.visit('/');

    cy.contains('Decrement').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');

    cy.get('button>a:contains("About")').click();
    cy.findByRole('heading', { level: 5 }).should('contain.text', 'About Page');

    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');
  });
});

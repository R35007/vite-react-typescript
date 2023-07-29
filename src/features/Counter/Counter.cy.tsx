import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from '~configs/store';
import theme from '~configs/theme';
import Counter from './Counter';

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Counter />
        </Provider>
      </ThemeProvider>
    );

    cy.contains('Decrement By 1').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');

    cy.contains('Increment By 1').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.get('input.MuiInput-input').clear().type('5');
    cy.contains('Increment By Value').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 5');

    cy.get('input.MuiInput-input').clear().type('-5');
    cy.contains('Increment By Value').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.contains('Decrement Async By 1').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is -1');

    cy.contains('Increment Async By 1').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');

    cy.get('input.MuiInput-input').clear().type('5');
    cy.contains('Increment Async By Value').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 5');

    cy.get('input.MuiInput-input').clear().type('-5');
    cy.contains('Increment Async By Value').click();
    cy.get('.Counter [role="note"]').should('contain.text', 'count is 0');
  });
});

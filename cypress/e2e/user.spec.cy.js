import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: '[name=username]',
    passwordField: '[name=password]',
    loginButton: '[type=submit]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role=alert]',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: '[name=firstName]',
    lastNameField: '[name=lastName]'
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).type('Paulo')
    cy.get(selectorList.lastNameField).type('Cesar')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})
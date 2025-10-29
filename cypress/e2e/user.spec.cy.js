import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[placeholder='Last Name']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  genericCombobox: ".oxd-select-text--after",
  secondItemCombobox: '.oxd-select-dropdown > :nth-child(2) > span',
  thirdItemCombobox: ':nth-child(3) > span',
  genderCombobox: ".oxd-radio-wrapper",
  submitButton: "[type='submit']",
  fourthItemCombobox: ".oxd-select-dropdown > :nth-child(6)",
  
}

  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click ()
    cy.get(selectorsList.firstNameField).clear().type("FirstName")
    cy.get(selectorsList.lastNameField).clear().type("LastName")
    cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorsList.genericField).eq(4).clear().type("Other")
    cy.get(selectorsList.genericField).eq(5).clear().type("DriverLicense") 
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-23-10")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.genericField).eq(8).clear().type("1990-29-09")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderCombobox).eq(1).click()
    cy.get(selectorsList.submitButton).eq(0).click({force:true})
    cy.get("body").should("contain", "Successfully Updated")
    cy.get('.oxd-toast-close').click()
    cy.get(selectorsList.genericCombobox).eq(2).click()
    cy.get(selectorsList.fourthItemCombobox).click()
    cy.get(selectorsList.genericField).eq(9).clear().type("Test")
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get("body").should("contain", "Successfully Saved")
    cy.get('.oxd-toast-close').click()


  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})

 
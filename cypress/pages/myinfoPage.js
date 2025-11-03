class MyInfoPage {

    selectorsList () {
        const selectors = {
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
       
        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeID, otherID, driversLicenseDate, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate) 
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    fillStatusDetails(dateOfBirth) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderCombobox).eq(1).click()
        
    }

    customFields(testField) {
        cy.get(this.selectorsList().genericCombobox).eq(2).click()
        cy.get(this.selectorsList().fourthItemCombobox).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testField)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force:true})
        cy.get("body").should("contain", "Successfully Updated")
        cy.get('.oxd-toast-close').click()
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get("body").should("contain", "Successfully Saved")
       
    }


}

export default MyInfoPage
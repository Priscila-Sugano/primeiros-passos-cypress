class MenuPage {

    selectorsList () {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            myPerformanceButton: ":nth-child(7) > .oxd-main-menu-item",
            myRecruitmentButton: ":nth-child(5) > .oxd-main-menu-item > .oxd-text",
            myTimeButton: ":nth-child(4) > .oxd-main-menu-item > .oxd-text",
            myLeaveButton: ":nth-child(3) > .oxd-main-menu-item",
            myPimButton: ":nth-child(2) > .oxd-main-menu-item",
            adminButton: ":nth-child(1) > .oxd-main-menu-item",
        }

        return selectors
    }

    acessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
        
    }

    acessMyPerformance() {
        cy.get(this.selectorsList().myPerformanceButton).click()
    }

    acessRecruitment() {
        cy.get(this.selectorsList().myRecruitmentButton).click()
    }

    acessMyTime() {
        cy.get(this.selectorsList().myTimeButton).click()
    }

    acessLeaveButto() {
        cy.get(this.selectorsList().myLeaveButton).click()
    }

    acessPim() {
        cy.get(this.selectorsList().myPimButton).click()
    }

    acessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

}

export default MenuPage

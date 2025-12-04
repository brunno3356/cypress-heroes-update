class HireButtonPage {
    selectorsList() {
        const selectors = {
            hireButton: "[data-cy='money']",
            LoginAlert: ".modal-container .open",
            confirmButton: "button.text-white"
        }

        return selectors
    }

    clickHireButton() {
        cy.get(this.selectorsList().hireButton).eq(1).click()
    }

    checkLoginAlert() {
        cy.get(this.selectorsList().LoginAlert).should('be.visible')
    }

    confirmHireButtonAdmin() {
        cy.get(this.selectorsList().confirmButton).eq(1).click()
    }

        confirmHireButtonDefault() {
        cy.get(this.selectorsList().confirmButton).eq(0).click()
    }
}

export default HireButtonPage
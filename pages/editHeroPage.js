class EditHeroPage {
    selectorsList() {
        const selectors = {
            editHeroButton: "[data-cy='pencil']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powerSelector: "[data-cy=powersSelect]",
            submitButton: "button.text-white",
            alertInformation: ".text-red-500"
        }

        return selectors
    }

    editHeroSucess(username, price, fans, saves) {
        cy.get(this.selectorsList().editHeroButton).eq(0).click()
        cy.get(this.selectorsList().nameField).clear().type(username)
        cy.get(this.selectorsList().priceField).clear().type(price)
        cy.get(this.selectorsList().fansField).clear().type(fans)
        cy.get(this.selectorsList().savesField).clear().type(saves)
        cy.get(this.selectorsList().powerSelector).select('6')
        cy.get(this.selectorsList().submitButton).eq(2).click()
    }

    editHeroAndClearField(fieldToClear, username, price, fans, saves) {
        cy.get(this.selectorsList().editHeroButton).eq(0).click()

        if (fieldToClear !== 'name') cy.get(this.selectorsList().nameField).clear().type(username)
        else cy.get(this.selectorsList().nameField).clear()

        if (fieldToClear !== 'price') cy.get(this.selectorsList().priceField).clear().type(price)
        else cy.get(this.selectorsList().priceField).clear()

        if (fieldToClear !== 'fans') cy.get(this.selectorsList().fansField).clear().type(fans)
        else cy.get(this.selectorsList().fansField).clear()

        if (fieldToClear !== 'saves') cy.get(this.selectorsList().savesField).clear().type(saves)
        else cy.get(this.selectorsList().savesField).clear()

        cy.get(this.selectorsList().powerSelector).select('6')
        cy.get(this.selectorsList().submitButton).eq(2).click()
        cy.get(this.selectorsList().alertInformation).should('be.visible')
    }
}

export default EditHeroPage
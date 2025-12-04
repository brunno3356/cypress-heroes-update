class DeleteHeroPage {
    selectorsList() {
        const selectors = {
            deleteHeroButton: "[data-cy='trash']",
            confirmButton: "button.text-white",

        }

        return selectors
    }

    deleteHero() {
        cy.get(this.selectorsList().deleteHeroButton).eq(5).click()
        cy.get(this.selectorsList().confirmButton).eq(1).click()
    }
}

export default DeleteHeroPage
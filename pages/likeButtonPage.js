class LikeButtonPage {
  selectorsList() {
    const selectors = {
      likeButton: "[data-cy='like']",
      LoginAlert: ".modal-container .open",
      fanCounter: "[data-cy='fans']",
    }
    return selectors
  }

  clickLikeButton() {
    cy.get(this.selectorsList().likeButton).eq(1).click()
  }

  checkLoginAlert() {
    cy.get(this.selectorsList().LoginAlert).should('be.visible')
  }
}

export default LikeButtonPage

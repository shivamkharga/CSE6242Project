// https://docs.cypress.io/api/introduction/api.html
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('Procrastinators: Recipe Recommendations LandingPage', () => {
  it('loads the landing page', () => {
    cy.visit('/')
    cy.get('div.mx-4').should('be.visible')
  })

  it('contains a Recipe Panel', () => {
    cy.visit('/')
    cy.get('main#recipeContainer').should('be.visible')
  })

  it('contains a Network Panel', () => {
    cy.visit('/')
    cy.get('main#network').should('be.visible')
  })
})

describe('Procrastinators NetworkGraph component', () => {
  it('contains 21 recipes by default', () => {
    // This will fail, there is a blank <g> element
    cy.visit('/')
    cy.get('g#node-group').children().should('have.length', 21)
  })

  it('selects the user node', () => {
    cy.visit('/')
    cy.get('circle.1').click().should('have.class', 'selected')
  })

  it('selects recommendation nodes when user node is selected', () => {
    cy.visit('/')
    // find the <circle> element that contains the 'rec1' text tag, it should not have class 'selected'
    let rec1 = cy.get('circle.2').parent().contains('rec1').siblings('circle.2')
    rec1.should('not.have.class', 'selected')

    cy.get('circle.1').click()
    // rec1 should have class 'selected' after user node is clicked
    rec1.should('have.class', 'selected')
  })

  it('selects recipe nodes and user node when a recommendation node is selected', () => {
    cy.visit('/')
    // find the <circle> element for the user, the <circle> element
    // that contains the 'rec5' text tag and find the
    // <circle> elements that are linked to rec5. All should not have 'selected' class
    let user = cy.get('circle.1')
    let rec5 = cy.get('circle.2').parent().contains('rec5').siblings('circle.2')
    let num81 = cy.get('circle.3').parent().contains('81').siblings('circle.3')
    let num45 = cy.get('circle.3').parent().contains('45').siblings('circle.3')
    let num137739 = cy
      .get('circle.3')
      .parent()
      .contains('137739')
      .siblings('circle.3')

    user.should('not.have.class', 'selected')
    rec5.should('not.have.class', 'selected')
    num81.should('not.have.class', 'selected')
    num45.should('not.have.class', 'selected')
    num137739.should('not.have.class', 'selected')

    // after clicking rec5 circle, user node and linked recipe nodes should have class 'selected'
    rec5.click()
    user.should('have.class', 'selected')
    rec5.should('have.class', 'selected')
    num81.should('have.class', 'selected')
    num45.should('have.class', 'selected')
    num137739.should('have.class', 'selected')
  })
})

describe('Procrastinators Recipe Panel', () => {
  it('should render default text when navigating to landing page', () => {
    let defaultText =
      'Select a node in the network diagram to view recipe details'

    cy.visit('/')
    cy.get('div#recipePanel').should('be.visible').and('contain', defaultText)

    cy.get('div#recipePanel')
      .should('be.visible')
      .and('contain', 'Recipe Panel')
  })

  it('should render recipe text when a recipe node is clicked', () => {
    cy.visit('/')
    // ensure recipe panel loads default
    cy.get('div#recipePanel')
      .should('be.visible')
      .and('contain', 'Recipe Panel')

    // click node 81
    cy.get('circle.3').parent().contains('81').siblings('circle.3').click()

    // ensure the default text is not present after a recipe is clicked
    let defaultText =
      'Select a node in the network diagram to view recipe details'
    cy.get('div#recipePanel')
      .should('not.contain', 'Recipe Panel')
      .and('not.contain', defaultText)

    // ensure the recipe panel changes from default to recipe information
    let recipeTitle = '20 000 Prize Winning Chili Con Carne'
    cy.get('div#recipePanel')
      .children()
      .should('contain', recipeTitle)
      .and('contain', 'Cook Time')
      .and('contain', 'Description')
      .and('contain', 'Ingredients')
  })

  it('should render a second recipe when a second recipe node is clicked', () => {
    cy.visit('/')
    cy.get('div#recipePanel')
      .should('be.visible')
      .and('contain', 'Recipe Panel')
    // click node 81
    cy.get('circle.3').parent().contains('81').siblings('circle.3').click()
    sleep(2000)
    cy.get('circle.3').parent().contains('81').siblings('circle.3').click()
    // click node 137739
    cy.get('circle.3').parent().contains('137739').siblings('circle.3').click()
    sleep(2000)

    let title81 = '20 000 Prize Winning Chili Con Carne'
    let title137739 = 'Ww 8 Points Thai Coconut Chicken'
    // ensure the recipe panel changes from default to recipe information
    cy.get('div#recipePanel')
      .children()
      .should('contain', 'Cook Time')
      .and('contain', 'Description')
      .and('contain', 'Ingredients')
      .and('not.contain', title81)
      .and('contain', title137739)
  })
})

describe('Procrastinators Header', () => {
  it('should render default text when brought to landing page', () => {
    cy.visit('/')
    let header = cy.get('div#top')
    header.children().should('contain', 'Recommendations for user 0')
  })

  it('should render a new user when valid user number inserted', () => {
    cy.visit('/')
    let idFieldBlock = cy.get('div#input').children().get('input')
    idFieldBlock.click()
    idFieldBlock.type('1{enter}')

    cy.get('div#top').children().should('contain', 'Recommendations for user 1')
  })

  it('should render current user when a negative number is inserted', () => {
    cy.visit('/')
    let idFieldBlock = cy.get('div#input').children().get('input')
    idFieldBlock.click()
    idFieldBlock.type('1{enter}')
    cy.get('div#top').children().should('contain', 'Recommendations for user 1')

    idFieldBlock = cy.get('div#input').children().get('input')
    idFieldBlock.click()
    idFieldBlock.type('-1{enter}')
    cy.get('div#top').children().should('contain', 'Recommendations for user 1')
    cy.get('div#top')
      .children()
      .should('not.contain', 'Recommendations for user -1')
  })

  it('should render current user when a non-numeric value is inserted', () => {
    cy.visit('/')
    let idFieldBlock = cy.get('div#input').children().get('input')
    idFieldBlock.click()
    idFieldBlock.type('1{enter}')
    cy.get('div#top').children().should('contain', 'Recommendations for user 1')

    idFieldBlock = cy.get('div#input').children().get('input')
    idFieldBlock.click()
    idFieldBlock.type('test{enter}')
    cy.get('div#top').children().should('contain', 'Recommendations for user 1')
    cy.get('div#top')
      .children()
      .should('not.contain', 'Recommendations for user test')
  })
})
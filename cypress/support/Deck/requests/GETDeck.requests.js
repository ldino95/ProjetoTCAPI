
/// <reference types="cypress" />


export function allDecks() {
  // cy.request - client http
  return cy.request({
    method: 'GET',
    url: 'deck/new/shuffle/?deck_count=1',
    failOnStatusCode: false,
  })
}

export function addCountDeck(countDeck) {
  return cy.request({
    method: 'GET',
    url: `deck/new/shuffle/?deck_count=${countDeck}`,
    failOnStatusCode: false,
    

  })

}

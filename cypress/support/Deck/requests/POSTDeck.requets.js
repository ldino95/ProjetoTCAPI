/// <reference types="cypress" />

import payloadsAddDeck from '../../../fixtures/payloads/add-deck.json'


export function addDeck(deck_id) {
  return cy.request({
    method: 'POST',
    url: `deck/${deck_id}/draw/?count=2`,
    failOnStatusCode: false,


  });

}
export function validBody(deck_id) {
  return cy.request({
    method: 'POST',
    url: `deck/${deck_id}/draw/?count=2`,
    failOnStatusCode: false,
    body: payloadsAddDeck

  })


}

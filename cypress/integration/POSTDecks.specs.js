import * as POSTDeck from '../support/Deck/requests/POSTDeck.requets';
import bodyJson from '../fixtures/payloads/add-deck.json'

describe('POST Decks', () => {


  it('Validar retorno de status da API e igual a 200', () => {
    POSTDeck.validBody(bodyJson.deck_id).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.deck_id).to.be.eq(bodyJson.deck_id)
    })
  });


  it('Validar que ao informar ID existente o retorno da api é com sucesso', () => {
    POSTDeck.addDeck("xceghd8ogcgp").should((response) => {
      expect(response.body.deck_id).to.eq("xceghd8ogcgp");
    })
  });


  it('Validar retorno do status de Deck nao existente ', () => {
    POSTDeck.addDeck("sahuashasu").should((response) => {
      expect(response.status).to.be.equal(404);


    })
  });

  
  it('Validar retorno de status da API e igual a 201', () => {
    POSTDeck.validBody(bodyJson.deck_id).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.deck_id).to.be.eq(bodyJson.deck_id)
    })
  });

  it('Validar retorno de status de quando o deck nao e informado', () => {
    POSTDeck.addDeck().should((response) => {
      expect(response.status).to.be.equal(404);

    })
  });
 



});
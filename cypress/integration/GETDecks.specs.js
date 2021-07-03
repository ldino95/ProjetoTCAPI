import * as GETDecks from '../support/Deck/requests/GETDeck.requests'

describe('GET Deck', () => {

    it('Validar se API e valida', () => {
        GETDecks.allDecks().should((response) => {
            expect(response.status).to.be.not.equal(404);
           
        });
    });
    it('Validar se api valida lista deck', () => {
        GETDecks.allDecks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;


        })
    });

    it('Validar resposta de quando numero de decks validos e informado', () => {
        GETDecks.addCountDeck("2").should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.deck_id).to.be.not.equal("")


        })
    });

    it('Validar resposta de quando numero de deck nao e informado', () => {
        GETDecks.addCountDeck("").should((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.be.eq('<h1>Server Error (500)</h1>');


        })
    });

    it('Validar resposta de quando numero de deck e informado e maior que 20', () => {
        GETDecks.addCountDeck(21).should((response) => {
            expect(response.headers).to.be.not.null;
            expect(response.body.success).to.eq(false)
            expect(response.body.deck_id).to.be.not.null;


        })
    });





});
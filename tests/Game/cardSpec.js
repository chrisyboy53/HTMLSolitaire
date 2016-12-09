describe('card', function() {

    var card;
    describe('when I create a new card', function() {
        beforeEach(function() {
            if (Game &&
                Game.Card &&
                Game.Card.Card) {
                    card = new Game.Card.Card(1, Game.CardSuits.Hearts);
                }
        });

        it('should have Card in the Game namespace', function() {
            expect(Game.Card).toBeDefined();
        });

        it('should have the card as the 1 of Hearts', function() {
            expect(card).toBeDefined();
            expect(card.cardNo).toBeDefined();
            expect(card.cardNo).toBe(1);
            expect(card.cardSuit).toBeDefined();
            expect(card.cardSuit).toBe(Game.CardSuits.Hearts);
        });
    });
});
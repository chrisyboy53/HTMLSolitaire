describe('card', function() {

    var card;
    describe('when I create a new card', function() {
        beforeEach(function() {
            if (Game &&
                Game.Card) {
                    card = new Game.Card(1, Game.CardSuits.Hearts);
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

    describe('when I want to find out card description', function() {
        it('should have the card of hearts to come out as Hearts', function() {
            var desc = Game.cardSuitsToText(Game.CardSuits.Hearts);
            expect(desc).toBe('Hearts');
        });
        it('should have the card of spades to come out as Spades', function() {
            var desc = Game.cardSuitsToText(Game.CardSuits.Spades);
            expect(desc).toBe('Spades');
        });
        it('should have the card of diamonds to come out as Diamonds', function() {
            var desc = Game.cardSuitsToText(Game.CardSuits.Diamonds);
            expect(desc).toBe('Diamonds');
        });
        it('should have the card of clubs to come out as Clubs', function() {
            var desc = Game.cardSuitsToText(Game.CardSuits.Clubs);
            expect(desc).toBe('Clubs');
        });
        it('should have a bad card to come out with an exception', function() {
            function test() {
                Game.cardSuitsToText(null);
            }

            expect(test).toThrow('Unknown card suit');
        });
    });
});
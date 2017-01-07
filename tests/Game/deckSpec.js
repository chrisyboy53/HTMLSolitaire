describe('deck', function() {

    describe('when I initialise deck', function(){

        beforeEach(function() {
            if (Game &&
                Game.Deck) {

                }
        });

        it('should not throw an exception when we have Card namespace', function() {
            expect(Game.Deck.init).not.toThrow('Deck requires Card namespace');
        });

        describe('when Card is taken out of the module', function() {
            beforeEach(function() {
                Game.Card = undefined;
            });

            it('should throw and exception when we try to initialise', function() {
                expect(Game.Deck.init).toThrow('Deck requires Card namespace');
            });
        })

    })

});
describe('game', function() {
    
    describe('when I initialise the game', function() {

        it('should not throw an exception when checking for deck namespace', function() {
            expect(Game.start).not.toThrow('Game requires the Deck namespace');
        });

    });

    describe('when I remove Deck module away', function() {
        beforeEach(function() {
            Game.Deck = null;
        });
        
        describe('when I initialise the game', function() {
            it('should throw an exception', function() {
                expect(Game.start).toThrow('Game requires the Deck namespace');
            });
        });
    });
});
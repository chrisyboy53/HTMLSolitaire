describe('game', function() {
    
    describe('when I initialise the game', function() {

        it('should not throw an exception when checking for deck namespace', function() {
            expect(Game.start).not.toThrow('Game requires the Deck namespace');
        });

    });
});
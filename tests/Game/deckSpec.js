describe('deck', function() {

    describe('when I initialise deck', function() {

        beforeEach(function() {
            if (Game &&
                Game.Deck) {

                }
        });

        it('should not throw an exception when we have Card namespace', function() {
            expect(Game.Deck.init).not.toThrow('Deck requires Card namespace');
        });

        it ('should not throw an exception when we have Collections.LinkList namespace', function() {
            expect(Game.Deck.init).not.toThrow('Deck requires LinkedList');
        });

        it ('should not throw an exception when we have CardManager namespace', function() {
            expect(Game.Deck.init).not.toThrow('Deck requires CardManager');
        });

        describe('when Card is taken out of the module', function() {
            var cardNamespace = Game.Card;
            
            beforeEach(function() {
                Game.Card = undefined;
            });

            afterEach(function() {
                Game.Card = cardNamespace;
            })

            it('should throw and exception when we try to initialise', function() {
                expect(Game.Deck.init).toThrow('Deck requires Card');
            });
        });

        describe('when LinkedList is taken out of the module', function() {
            var linkListNamespace = Utilities.Collections.LinkedList;
            
            beforeEach(function() {
                Utilities.Collections.LinkedList = undefined;
            });

            afterEach(function() {
                Utilities.Collections.LinkedList = linkListNamespace;
            });
            
            it('should throw and exception when we try to initialise', function() {
                expect(Game.Deck.init).toThrow('Deck requires LinkedList');
            });
        });

        describe('when CardManager is taken out of the module', function() {
            var cardManager = Game.CardManager;

            beforeEach(function() {
                Game.CardManager = undefined;
            });

            afterEach(function() {
                Game.CardManager = cardManager;
            });
            
            it('should throw and exception when we try to initialise', function() {
                expect(Game.Deck.init).toThrow('Deck requires CardManager');
            });
        });

    })

});
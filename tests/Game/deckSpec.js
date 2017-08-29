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

    });

    describe('when I setup a mocked version of deck', function() {

        deck = null;
        
        function _setupMockedStack() {
            if (Game && 
                Game.Deck &&
                Game.Card) {

                deck = Game.Deck;
                
                var cardNo = 1;

                for (var i = 0, len = deck.stacks.length; i < len; i++) {
                    deck.stacks[i] = new Utilities.Collections.LinkedList();
                    deck.stacks[i].push(new Game.Card(cardNo, Game.CardSuits.Spades, Game.CardSide.Front));
                    cardNo++;
                }
            }
        }

        beforeEach(function() {
            _setupMockedStack();
        });

        it('should have the first card in the stack with an ace of spades', function() {
            expect(deck.stacks[0].head.item.cardNo).toBe(1);
            expect(deck.stacks[0].head.item.cardSuit).toBe(Game.CardSuits.Spades);
        });

        describe('when I check to see if I can put 2 of hearts on the first stack', function() {
            it('should be ok to place', function() {
                var card = new Game.Card(2, Game.CardSuits.Hearts, Game.CardSide.Front);
                var canMove = deck.canMoveCard(card, deck.stacks[0].head.item);
                expect(canMove).toBe(true);
            });
        });

    });

});
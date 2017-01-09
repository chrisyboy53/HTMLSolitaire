/*
 * Deck extends the game module
*/
var Game = Game ||  {};
var Utilities = Utilities || {};
Utilities.Collections = Utilities.Collections || {};

(function (game, collections) {

    var deckModule = {};

    deckModule.stack = 7;

    deckModule.numberOfPots = 4;

    deckModule.stacks = [deckModule.stack];

    deckModule.pots = [deckModule.numberOfPots];

    deckModule.pack = null;

    /**
     * Intantiates the deck
     */
    function init() {
        
        if (!game.Card) {
            throw 'Deck requires Card';
        }

        if (!collections.LinkedList) {
            throw 'Deck requires LinkedList';
        }

        if (!game.CardManager) {
            throw 'Deck requires CardManager';
        }

        buildDeck();
    }

    /**
     * Helps build the stacks and pots
     */
    function buildDeck() {
        deckModule.stacks = new Array();
        var packOfCards = game.CardManager.getCardPack();
        packOfCards = game.CardManager.shuffleCards(packOfCards);

        var firstCard = 0,
            numOfCardsToTake = 1;

        // Build each stack
        for(var i = 0, len = deckModule.stack; i < len; i++) {
            deckModule.stacks[i] = new collections.LinkedList();
            
            // Start building stack from pack of cards
            for (var cardIndex = 0, indexAdd = 1, cLen = i + indexAdd; cardIndex < cLen; cardIndex++) {
                var card = packOfCards.splice(firstCard, numOfCardsToTake);

                if (cardIndex !== cLen) {
                    card.cardSide = game.CardSide.Back;
                }

                deckModule.stacks[i].push(card);
            }
        }
        
        // Build the pots
        for (var i = 0, len = deckModule.numberOfPots; i < len; i++) {
            deckModule.pots[i] = new collections.LinkedList();
        }

        deckModule.pack = packOfCards;
    }

    deckModule.init = init;

    game.Deck = deckModule;

})(Game, Utilities.Collections);
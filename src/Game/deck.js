/*
 * Deck extends the game module
*/
var Game = Game ||  {};
var Utilities = Utilities || {};
Utilities.Collections = Utilities.Collections || {};

(function (game, collections) {

    var deckModule = {};

    deckModule.stack = 7;

    deckModule.pots = 4;

    deckModule.stacks = [deckModule.stack];

    /**
     * Intantiates the deck
     */
    function init() {
        
        if (!game.Card) {
            throw 'Deck requires Card namespace';
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
            deckModule.stacks.push(new collections.LinkedList());
            
            // Start building stack from pack of cards
            for (var cardIndex = 0, cLen = i + 1; cardIndex < cLen; cardIndex++) {
                var card = packOfCards.splice(firstCard, numOfCardsToTake);
                deckModule.stacks[i].push(card);
            }
        }
    }

    deckModule.init = init;

    game.Deck = deckModule;

})(Game, Utilities.Collections);
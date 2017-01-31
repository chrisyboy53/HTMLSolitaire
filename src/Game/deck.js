/*
 * Deck extends the game module
*/
var Game = Game ||  {};
var Utilities = Utilities || {};
Utilities.Collections = Utilities.Collections || {};

/**
 * @module Deck
 * @requires Collections
 */
(function (game, collections) {

    var deckModule = {};

    /** 
     * Number of stacks configured
     * @readonly
     * @memberof module:Deck
     * @name stack
     * @type {number}
     */
    deckModule.stack = 7;

    /** 
     * Number of pots configured
     * @readonly
     * @memberof module:Deck
     * @name numberOfPots
     * @type {number}
     */
    deckModule.numberOfPots = 4;

    /**
     * Holds a list of stacked cards
     * @readonly
     * @memberof module:Deck
     * @name stacks
     * @type {Array<Utilities.module:Collections.LinkedList<module:Game.Card>>}
     */
    deckModule.stacks = [deckModule.stack];

    deckModule.holdingPlayStack = null;

    /**
     * Holds a list of pot cards
     * @readonly
     * @memberof module:Deck
     * @name pots
     * @type {Array<Utilities.module:Collections.LinkedList<module:Game.Card>>}
     */
    deckModule.pots = [deckModule.numberOfPots];

    /**
     * Holds a list of cards
     * @readonly
     * @memberof module:Deck
     * @name pack
     * @type {Array<module:Game.Card>}
     */
    deckModule.pack = null;

    /**
     * Intantiates the deck
     * @memberof module:Deck
     * @returns {undefined}
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
     * @memberof module:Deck
     * @returns {undefined}
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
                    card[0].cardSide = game.CardSide.Back;
                }

                deckModule.stacks[i].push(card[0]);
            }
        }
        
        // Build the pots
        for (var i = 0, len = deckModule.numberOfPots; i < len; i++) {
            deckModule.pots[i] = new collections.LinkedList();
        }

        // BUG: Seems to be undefined card getting into the pack
        deckModule.pack = packOfCards;

        deckModule.holdingPlayStack = new collections.LinkedList();
    }

    deckModule.init = init;

    game.Deck = deckModule;

})(Game, Utilities.Collections);
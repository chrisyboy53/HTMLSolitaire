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
                var card = packOfCards.splice(firstCard, numOfCardsToTake),
                    one = 1;

                if (cardIndex !== cLen - one) {
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

    /**
     * Rule for moving card to dest
     * @param {Game.Card} source being moved
     * @param {Game.Card} dest being placed on
     * @returns {boolean} Truthy on if the move is successful
     */
    function _canMoveCard(source, dest) {
        var canMove = false;
        // Run through tail of stacks
        for(var i = 0, len = deckModule.stack; i < len; i++) {
            var tail = deckModule.stacks[i].tail;

            if (tail) {
                if (tail.item === dest) {
                    var differentColor = source.cardColor !== dest.cardColor;
                    var one = 1, 
                        cardIsNextToEachOther = dest.cardNo + one === source.cardNo ||
                                                dest.cardNo - one === source.CardNo;
                    
                    if (differentColor && cardIsNextToEachOther) {
                        canMove = true;
                    }
                    break;
                }
            }
            else {
                var king = 13;
                if (source.cardNo === king) {
                    canMove = true;
                }
            }
        }

        if (!canMove) {

            // Check pots
            for (var i = 0, len = deckModule.numberOfPots; i < len; i++) {
                var pot = deckModule.pots[i];

                if (pot.tail) {
                    var tail = pot.tail;
                    if (tail.item === dest) {
                        var cardIsSameSuit = source.cardSuit === dest.cardSuit;
                        var one = 1,
                            cardIsNextOneUp = dest.cardNo + one === source.cardNo;

                        if (cardIsSameSuit && cardIsNextOneUp) {
                            canMove = true;
                        }
                    }
                }
                else {
                    var ace = 1;
                    if (source.cardNo === ace) {
                        canMove = true;
                    }
                }

            }

        }

        return canMove;
    }

    deckModule.canMoveCard = _canMoveCard;

    deckModule.init = init;

    game.Deck = deckModule;

})(Game, Utilities.Collections);
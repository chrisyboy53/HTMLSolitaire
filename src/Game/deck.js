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

        buildDeck();
    }

    /**
     * Helps build the stacks and pots
     */
    function buildDeck() {
        deckModule.stacks = new Array();
        var number2 = 2;
        for(var i = 0, len = deckModule.stack; i < len; i++) {
            deckModule.stacks.push(new collections.LinkedList());
            deckModule.stacks[i].push(new game.Card(number2, game.CardSuits.Hearts));
        }

    }

    deckModule.init = init;

    game.Deck = deckModule;

})(Game, Utilities.Collections);
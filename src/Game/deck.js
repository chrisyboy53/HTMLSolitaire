/*
 * Deck extends the game module
*/

(function (game) {

    var deckModule = {};

    deckModule.stack = 7;

    deckModule.pots = 4;

    /**
     * Intantiates the deck
     */
    function init() {
        if (!game.Card) {
            throw 'Deck requires Card namespace';
        }
    }

    deckModule.init = init;

    game.Deck = deckModule;

})(Game || {});
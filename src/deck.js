/*
 * Deck extends the game module
*/

(function(game) {
    var deckModule = {};

    deckModule.stack = 7;

    deckModule.pots = 4;



    game.deck = deckModule;

})(Game || {})
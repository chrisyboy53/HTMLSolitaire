/**
 * 
 * Game module
 * 
 * The entry point of the application
 * 
 */

// Setup game module
var Game = Game || {};

(function(game) {
    
    game.start = function() {
        console.log('Game invoked');

        if (!game.Deck) {
            throw 'Game requires the Deck namespace';
        }

        game.Deck.init();

    };

})(Game ||  {});
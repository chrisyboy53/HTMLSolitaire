/**
 * 
 * Game module
 * 
 * The entry point of the application
 * 
 */

// Setup game module
/**
 * @ignore
 */
var Game = Game || {};

/**
 * @module Game
 * @desc Game Business Logic module
 */
(function(game) {
    
    /**
     * Starts the game. First place to invoke
     * @memberof module:Game
     * @returns {undefined}
     */
    game.start = function() {
        console.log('Game invoked');

        if (!game.Deck) {
            throw 'Game requires the Deck namespace';
        }

        game.Deck.init();

    };

})(Game ||  {});
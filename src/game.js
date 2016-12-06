/**
 * 
 * Game module
 * 
 * The entry point of the application
 * 
 */

// Setup game module
var Game = {};

(function(game, collections) {

    game.start = function() {
        console.log('Game invoked');

        var myList = new collections.LinkedList();

        myList.push(1);
        myList.push(55);
        myList.push(44);

        var enumerable = myList.getEnumerator();

        while(enumerable.moveNext())
        {
            console.dir(enumerable.item)
        }

    }

})(Game ||  {}, Utilities.Collections)
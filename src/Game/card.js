/*
 * Card code for allowing games to hold card information
 * 
 * Game.Card namespace is setup here
*/

var Game = Game ||  {};

(function (game) {

    var Card = undefined;

    /**
     * Setups a new card
     * @param {number} cardNo number to make
     * @param {Game.CardSuits} cardSuit card suit
     */
    Card = function (cardNo, cardSuit) {
        this.cardNo = cardNo;
        this.cardSuit = cardSuit;
    };

    game.CardSuits = {
        Hearts: 0,
        Spades: 1,
        Clubs: 2,
        Diamonds: 3
    };

    game.Card = Card;

})(Game || {});
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
     * @param {Game.CardSide} side optional param to say which side the card is facing
     */
    Card = function (cardNo, cardSuit, side) {
        this.cardNo = cardNo;
        this.cardSuit = cardSuit;
        this.cardSide = side === undefined ? game.CardSide.Front : side;
    };

    game.CardSide = {
        Front: 0,
        Back: 1
    };

    game.CardSuits = {
        Hearts: 0,
        Spades: 1,
        Clubs: 2,
        Diamonds: 3
    };

    game.Card = Card;

})(Game || {});
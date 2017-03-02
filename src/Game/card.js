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
     * @class Card
     * @classdesc Business object to hold card information state
     * @constructor 
     * @memberof module:Game
     * @param {number} cardNo number to make
     * @param {Game.CardSuits} cardSuit card suit
     * @param {Game.CardSide} [side] Which side the card is facing
     */
    Card = function (cardNo, cardSuit, side) {
        /**
         * Card Number
         * @memberof module:Game.Card
         * @name cardNo
         * @type {number}
         */
        this.cardNo = cardNo;
        /**
         * Information on the card suit state
         * @memberof module:Game.Card
         * @name cardSuit
         * @type {Game.CardSuits}
         */
        this.cardSuit = cardSuit;
        /**
         * Information on the card side state
         * @memberof module:Game.Card
         * @name cardSide
         * @type {Game.CardSide}
         */
        this.cardSide = side === undefined ? game.CardSide.Front : side;

        this.cardColor = cardSuit === game.CardSuits.Clubs || cardSuit === game.CardSuits.Spades ? 
                            game.CardColor.Black : 
                            game.CardColor.Red;

    };

    /**
     * Selection of Card Side
     * @name CardSide
     * @enum {number}
     * @memberof module:Game
     */
    game.CardSide = {
        Front: 0,
        Back: 1
    };
    
    game.CardColor = {
        Red: 0,
        Black: 1
    };

    /**
     * Selection of Card Suits
     * @name CardSuits
     * @enum {number}
     * @memberof module:Game
     */
    game.CardSuits = {
        Hearts: 0,
        Spades: 1,
        Clubs: 2,
        Diamonds: 3
    };

    game.cardSuitsToText = function(suit) {
        switch(suit) {
            case game.CardSuits.Hearts:
                return 'Hearts';
            case game.CardSuits.Spades:
                return 'Spades';
            case game.CardSuits.Clubs:
                return 'Clubs';
            case game.CardSuits.Diamonds:
                return 'Diamonds';
            default:
                throw 'Unknown card suit';
        }
    };

    game.Card = Card;

})(Game || {});
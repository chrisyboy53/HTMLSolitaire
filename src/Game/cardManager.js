var Game = Game ||  {};

/**
 * Card Manager holds the cards<br/><br/>
 * 
 * This is where we can retrieve packs of cards.
 * Helps shuffles cards.
 * @module CardManager
 */
(function(game){

    var cardManager = {};

    if (!game.Card) {
        throw 'Card manager depends on Card being loaded first';
    }

    /**
     * Helps get a pack of cards
     * @memberof module:CardManager
     * @returns {Array<Game.Card>} - Returns back a pack of cards. IE 52 cards of course.
     */
    function _getCardPack() {
        var cards = new Array();

        for (var suit in game.CardSuits) {
            for (var i = 1, len = 13; i <= len; i++) {
                cards.push(new game.Card(i, game.CardSuits[suit]));
            }
        }

        return cards;
    }

    /**
     * This will shuffle an array of cards
     * @memberof module:CardManager
     * @param {Array<Game.Cards>} cards Pack of cards to shuffle
     * @returns {Array<Game.Card>} Returns shuffled cards
     */
    function _shuffleCards(cards) {
        var newCollection = [],
            zero = 0,
            numberOfItemsToCut = 1;

        var cloneCards = new Array();

        for (var i = 0, len = cards.length; i < len; i++) {
            cloneCards.push(cards[i]);
        }

        for (var i = cards.length; i >= zero; i--) {
            var randIndex = Math.floor(Math.random() * i);
            var cardToAdd = cloneCards.splice(randIndex, numberOfItemsToCut);
            
            newCollection.push(cardToAdd[0]);
            
        }
        return newCollection;
    }

    cardManager.getCardPack = _getCardPack;

    cardManager.shuffleCards = _shuffleCards;
    Game.CardManager = cardManager;
    return cardManager;
})(Game);
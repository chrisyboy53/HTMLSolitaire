var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender, game) {

    var domCard = {};

    /**
     * Creates a DOM Card Element
     * @param {Game.Card} cardItem Card Item to create DOM
     * @returns {HTMLImageElement} Returns a Card DOM Image
     */
    function _createCard(cardItem) {

        /**
         * Gets the text version of the number
         * Useful to know when its not a number and possibly a Ace, King, Queen, Jack
         * @param {number} number The card number to turn to text
         * @returns {string} The text value of the card number
         */
        function cardNoToCard(number) {
            var ace = 1,
                jack = 11,
                queen = 12,
                king = 13,
                ten = 10;

            if (number === ace) {
                return 'Ace';
            }
            else if (number > ten) {
                switch (number) {
                    case jack:
                        return 'Jack';
                    case queen:
                        return 'Queen';
                    case king:
                        return 'King';
                }
            }
            else {
                return number.toString();
            }
        }

        /**
         * Event listener for clicking on the card
         */
        function onClick() {
            alert('You clicked on the ' + cardNoToCard( cardItem.cardNo ) + ' of ' + game.cardSuitsToText(cardItem.cardSuit));
        }

        var cardImageExtension = '.svg',
            imgDir = 'imgs/';
        
        var ten = 10;

        var cardFile = imgDir + cardNoToCard( cardItem.cardNo ).toLowerCase() + '_of_' + game.cardSuitsToText(cardItem.cardSuit).toLowerCase() + (cardItem.cardNo > ten ? '2' : '' ) + cardImageExtension;

        var cardImg = document.createElement('img');
        cardImg.src = cardItem.cardSide === Game.CardSide.Back ? imgDir + 'red_joker.svg' : cardFile;

        cardImg.addEventListener('click', onClick);
        
        return cardImg;
    }

    domCard.createCard = _createCard;

    domRender.DOMCard = domCard;

})(Visual.DOMRender, Game);
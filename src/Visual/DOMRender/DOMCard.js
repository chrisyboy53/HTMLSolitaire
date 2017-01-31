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
                return 'ace';
            }
            else if (number > ten) {
                switch (number) {
                    case jack:
                        return 'jack';
                    case queen:
                        return 'queen';
                    case king:
                        return 'king';
                }
            }
            else {
                return number.toString();
            }
        }

        var cardImageExtension = '.svg',
            imgDir = 'imgs/';

        var cardFile = imgDir + cardNoToCard( cardItem.cardNo ) + '_of_' + game.cardSuitsToText(cardItem.cardSuit) + cardImageExtension;

        var cardImg = document.createElement('img');
        cardImg.src = cardFile;

        return cardImg;
    }

    domCard.createCard = _createCard;

    domRender.DOMCard = domCard;

})(Visual.DOMRender, Game);
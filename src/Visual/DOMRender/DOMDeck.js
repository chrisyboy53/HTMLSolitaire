var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender) {

    var deckDOM = {};

    var deckContainer = null;

    var _bottomStack = null;

    /**
     * Initialises the DOM Deck
     * @returns {undefined}
     */
    function _init() {
        if (!Visual.DOMRender.DOMCanvas) {
            throw 'Missing Visual.DOMRender.DOMCanvas object';
        }

        if (!Game.Deck) {
            throw 'Missing Game.Deck object';
        }

        _buildDeck();
    }

    /**
     * Builds up the whole deck container
     * @returns {undefined}
     */
    function _buildDeck() {
        deckContainer = document.createElement('div');

        _bottomStack = _buildBottomStacks();
    }

    /**
     * Creates a card
     * @param {Game.Card} cardItem card number to create
     * @returns {HTMLLIElement} returns a new card DOM Object
     */
    function _createCard(cardItem) {
        var cardHeadNamePrefix = 'card-img',
            cardImageExtension = '.svg';

        var cardFile = cardHeadNamePrefix + cardItem.cardSuit + '-' + cardItem.cardNo + cardImageExtension;

        var cardDom = document.createElement('li');

        var cardImg = document.createElement('img');
        cardImg.src = cardFile;

        cardDom.appendChild(cardImg);

        return cardDom;
    }

    /**
     * Creates a new stack list
     * @param {Utilities.LinkedList<Game.Card>} stack The Items to render in a DOM list
     * @returns {HTMLLIElement} Child Element containing list of cards
     */
    function _createStack(stack) {
        var stackDom = document.createElement('li');
        var stackList = document.createElement('ul');

        var stackEnumerator = stack.getEnumerator();
        
        while(stackEnumerator.moveNext())
        {
            stackList.appendChild( _createCard( stack.currentItem ) );
        }

        return stackDom;
    }

    /**
     * Build the entire bottom stack
     * @returns {HTMLUListElement} The List containing each stack of cards
     */
    function _buildBottomStacks() {
        if (!deckContainer) {

            var bottomStacks = document.createElement('ul');

            for (var i = 0, len = Game.Deck.stacks.length; i < len; i++) {
                bottomStacks.appendChild(
                    _createStack(Game.Deck.stacks[i])
                );
            }

            return bottomStacks;
        }
        return null;
    }

    deckDOM.bottomStack = _bottomStack;
    deckDOM.init = _init;

    domRender.DOMDeck = deckDOM;

})(Visual.DOMRender);
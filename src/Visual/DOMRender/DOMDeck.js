var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender) {

    var deckDOM = {};

    var deckContainer = null;

    var bottomStack = document.createElement('ul');

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
    }

    /**
     * Builds up the whole deck container
     * @returns {undefined}
     */
    function _buildDeck() {

        deckContainer = document.createElement('div');

        _buildBottomStacks();
    }

    /**
     * Creates a card
     * @param {Game.Card} cardItem card number to create
     * @returns {HTMLLIElement} returns a new card DOM Object
     */
    function _createCard(cardItem) {
        return null;
    }

    /**
     * Creates a new stack list
     * @param {Utilities.LinkedList<Game.Card>} stack The Items to render in a DOM list
     * @returns {HTMLLIElement} Child Element containing list of cards
     */
    function _createStack(stack) {
        var stackDom = document.createElement('li');

        for (var ii = 0, iLen = stack.length; ii < iLen; ii++) {

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
                // var 
                // bottomStacks.appendChild(

                // )
            }

            return bottomStacks;
        }
        return null;
    }

    domRender.DOMDeck = deckDOM;

})(Visual.DOMRender);
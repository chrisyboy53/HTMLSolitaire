var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender, game) {

    var deckDOM = {};

    var deckContainer = null;

    var _bottomStack = null;

    /**
     * Initialises the DOM Deck
     * @returns {undefined}
     */
    function _init() {
        if (!domRender.DOMCanvas) {
            throw 'Missing Visual.DOMRender.DOMCanvas object';
        }

        if (!game.Deck) {
            throw 'Missing Game.Deck object';
        }

        if (!domRender.DOMCanvas.element) {
            throw 'Need to initialise the DOMCanvas first';
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

        deckContainer.appendChild(_bottomStack);

        domRender.DOMCanvas.element.appendChild(deckContainer);
    }

    /**
     * Creates a card
     * @param {Game.Card} cardItem card number to create
     * @returns {HTMLLIElement} returns a new card DOM Object
     */
    function _createCard(cardItem) {
        var cardDom = document.createElement('li');

        cardDom.appendChild( domRender.DOMCard.createCard(cardItem) );

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
            stackList.appendChild( _createCard( stackEnumerator.current.item ) );
        }

        stackDom.appendChild(stackList);

        return stackDom;
    }

    /**
     * Build the entire bottom stack
     * @returns {HTMLUListElement} The List containing each stack of cards
     */
    function _buildBottomStacks() {
        var bottomStacks = document.createElement('ul');

        for (var i = 0, len = game.Deck.stacks.length; i < len; i++) {
            bottomStacks.appendChild(
                _createStack(game.Deck.stacks[i])
            );
        }

        return bottomStacks;
    }

    /**
     * Redraws the entire deck
     * @returns {undefined}
     */
    function _redraw() {
        domRender.DOMCanvas.element.removeChild(deckContainer);

        deckContainer = null;

        _buildDeck();
    }

    deckDOM.bottomStack = _bottomStack;
    deckDOM.init = _init;
    deckDOM.redraw = _redraw;

    domRender.DOMDeck = deckDOM;

})(Visual.DOMRender, Game);
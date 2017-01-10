var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender) { 

    var deckContainer = null;

    var bottomStack = document.createElement('ul');

    function _init() {
        if (!Visual.DOMRender.DOMCanvas) {
            throw 'Missing Visual.DOMRender.DOMCanvas object';
        }

        if (!Game.Deck) {
            throw 'Missing Game.Deck object';
        }
    }

    function _buildDeck() {

        deckContainer = document.createElement('div');

        _buildBottomStacks();
    }

    function _createCard(cardItem) {

    }


    function _createStack(stack) {
        var stack = document.createElement('li');

        for (var ii = 0, iLen = stack.length; ii < iLen; ii++) {

            

        }

    }

    function _buildBottomStacks() {
        if (!deckContainer) {

            var bottomStacks = document.createElement('ul');

            for (var i = 0, len = Game.Deck.stacks.length; i < len; i++) {
                var 
                bottomStacks.appendChild(

                )
            }

        }
    }

})(Visual.DOMRender);
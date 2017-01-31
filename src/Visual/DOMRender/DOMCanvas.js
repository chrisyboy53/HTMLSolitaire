var Visual = Visual || {};

Visual.DOMRender = Visual.DOMRender || {};

(function(domRender) {

    var canvas = {};

    /**
     * Intialises the canvas
     */
    function _init() {

        if (!domRender.DOMDeck) {
            throw 'DOMCanvas Requires Visual.DOMRender.DOMDeck to be present';
        }

        var canvasElement = document.getElementById('canvas');

        if (!canvasElement) {
            throw 'Need a HTML Element with an id of \'canvas\'';
        }


        canvas.element = canvasElement;
    }

    canvas.init = _init;

    domRender.DOMCanvas = canvas;

})(Visual.DOMRender);
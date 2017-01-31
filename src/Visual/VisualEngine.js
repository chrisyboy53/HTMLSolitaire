var Visual = Visual || {};

(function(visual) {

    var visualEngine = {};

    /**
     * Initialises the visual engine
     * 
     * @returns {undefined}
     */
    function _init() {

        if (!visual.Canvas) {
            throw 'Need Canvas loaded';
        }

        visual.Canvas.init();
    }

    /**
     * Redraws the canvas
     * 
     * @returns {undefined}
     */
    function _redraw() {
        visual.Canvas.redraw();
    }

    /**
     * Sets up the Canvas Library to use
     * @param {Object} canvas Canvas Library to use for Visual
     * @returns {undefined}
     */
    function _setCanvasLib(canvas) {
        visual.Canvas = canvas;
    }

    visualEngine.setCanvasLib = _setCanvasLib;

    visualEngine.init = _init;

    visualEngine.redraw = _redraw;

    visual.VisualEngine = visualEngine;

})(Visual);
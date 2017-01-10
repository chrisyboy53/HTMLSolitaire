var Visual = Visual || {};

(function(visual) {

    var visualEngine = {};

    function _init() {

        if (!visual.Canvas) {
            throw 'Need Canvas loaded';
        }

        visual.Canvas.init();
    }

    visualEngine.init = _init;

})(Visual);
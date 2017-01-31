if (Game) {

    Game.start();

    Visual.VisualEngine.setCanvasLib( Visual.DOMRender.DOMCanvas );

    Visual.VisualEngine.init();

    var btnReset = document.getElementById('btnReset');

    btnReset.addEventListener('click', function () {
        Game.start();
        Visual.VisualEngine.redraw();
    });

}
else {
    throw 'Game module not loaded';
}

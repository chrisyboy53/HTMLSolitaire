var gameDiv = document.getElementById('game');

if (Game) {

    Game.start(gameDiv);

    Visual.VisualEngine.setCanvasLib( Visual.DOMRender.DOMCanvas );

    Visual.VisualEngine.init();

}
else {
    throw 'Game module not loaded';
}

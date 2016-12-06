var gameDiv = document.getElementById('game');

if (Game) {

    Game.start(gameDiv);

}
else {
    throw "Game module not loaded";
}

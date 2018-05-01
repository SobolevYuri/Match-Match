import GameOptions from "./GameOptions";
import NewGame from "./NewGame";

class Game {
    constructor() {
        this.currentGame = null;
        this.start();
    }

    start() {
        const newGameButton = document.querySelector('#newGame');
        const gameOptions = new GameOptions();
        newGameButton.addEventListener('click', function (e) {
            if (!this.currentGame) this.currentGame = new NewGame(gameOptions);
            else {
                this.currentGame.stopTimer();
                this.currentGame = new NewGame(gameOptions);
            }
        }.bind(this));
    }
}

const game=new Game();
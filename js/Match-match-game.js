import UserManager from "./UserManager";
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
        const userManager = new UserManager();
        newGameButton.addEventListener('click', (event) => {
            if (this.currentGame)  {
              this.currentGame.stopTimer();
            }
            this.currentGame = new NewGame(gameOptions, userManager);
        });
    }
}

const game=new Game();

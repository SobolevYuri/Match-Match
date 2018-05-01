import {DIFFICULTIES} from './Constants';
import GameEntity from "./GameEntity"

export default class Difficulty extends GameEntity{

    constructor() {
        super();
        this.value=DIFFICULTIES[0].value;//default
        this.cardSize=DIFFICULTIES[0].id;//default
    }

    setEventsListeners() {
        const easyDifficult = document.querySelector('#easy');
        const mediumDifficult = document.querySelector('#medium');
        const hardDifficult = document.querySelector('#hard');

        easyDifficult.addEventListener('click', function (e) {
            this.cardSize=DIFFICULTIES[0].id;
            this.value=DIFFICULTIES[0].value;
            easy.classList.add('active');
            mediumDifficult.classList.remove('active');
            hardDifficult.classList.remove('active');
        }.bind(this));

        mediumDifficult.addEventListener('click', function (e) {
            this.cardSize=DIFFICULTIES[1].id;
            this.value=DIFFICULTIES[1].value;
            mediumDifficult.classList.add('active');
            easyDifficult.classList.remove('active');
            hardDifficult.classList.remove('active');
        }.bind(this));

        hardDifficult.addEventListener('click', function (e) {
            this.cardSize=DIFFICULTIES[2].id;
            this.value=DIFFICULTIES[2].value;
            hardDifficult.classList.add('active');
            easyDifficult.classList.remove('active');
            mediumDifficult.classList.remove('active');
        }.bind(this));
    }
}
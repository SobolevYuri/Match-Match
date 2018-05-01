import { DIFFICULTIES } from './Constants';
import Subscriber from "./Subscriber"

export default class Difficulty extends Subscriber {

    constructor() {
        super();
        this.stringValue = DIFFICULTIES[0].id;
        this.value=DIFFICULTIES[0].value;//default
        this.cardSize=DIFFICULTIES[0].id;//default
    }

    setEventsListeners() {
        const easyDifficult = document.querySelector('#easy');
        const mediumDifficult = document.querySelector('#medium');
        const hardDifficult = document.querySelector('#hard');

        easyDifficult.addEventListener('click', (event) => {
            this.cardSize=DIFFICULTIES[0].id;
            this.value=DIFFICULTIES[0].value;
            this.stringValue = DIFFICULTIES[0].id;
            easyDifficult.classList.add('active');
            mediumDifficult.classList.remove('active');
            hardDifficult.classList.remove('active');
        });

        mediumDifficult.addEventListener('click', (event) => {
            this.cardSize=DIFFICULTIES[1].id;
            this.value=DIFFICULTIES[1].value;
            this.stringValue = DIFFICULTIES[1].id;
            mediumDifficult.classList.add('active');
            easyDifficult.classList.remove('active');
            hardDifficult.classList.remove('active');
        });

        hardDifficult.addEventListener('click', (event) => {
            this.cardSize=DIFFICULTIES[2].id;
            this.value=DIFFICULTIES[2].value;
            this.stringValue = DIFFICULTIES[2].id;
            hardDifficult.classList.add('active');
            easyDifficult.classList.remove('active');
            mediumDifficult.classList.remove('active');
        });
    }
}
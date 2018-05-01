import {DIFFICULTIES, CARDS} from './Constants';
import GameEntity from "./GameEntity"

export default class Card extends GameEntity{
    constructor() {
        super();
        this.value=CARDS.slice(0, DIFFICULTIES[0].value/2);//default
    }

    setInstance(difficult) {
        this.value=CARDS.slice(0, difficult/2);
        this.value = this.value.concat(this.value);
        this.setRandomBacks();
    }

    setRandomBacks(){
        const length=this.value.length;
        for (let i = length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.value[i];
            this.value[i] = this.value[j];
            this.value[j] = temp;
        }
    }

}
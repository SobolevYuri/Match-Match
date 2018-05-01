import { SHIRTS } from './Constants';
import Subscriber from "./Subscriber"

export default class Shirt extends Subscriber {

    constructor() {
        super();
        this.value = SHIRTS[0].id;//default
    }

    setEventsListeners(){
        const shirt1 = document.querySelector('#shirt1');
        const shirt2 = document.querySelector('#shirt2');
        const shirt3 = document.querySelector('#shirt3');

        shirt1.addEventListener('click', (event) => {
            this.value = SHIRTS[0].id;
            shirt1.classList.add('active');
            shirt2.classList.remove('active');
            shirt3.classList.remove('active');
        });

        shirt2.addEventListener('click', (event) => {
            this.value = SHIRTS[1].id;
            shirt2.classList.add('active');
            shirt1.classList.remove('active');
            shirt3.classList.remove('active');
        });

        shirt3.addEventListener('click', (event) => {
            this.value = SHIRTS[2].id;
            shirt3.classList.add('active');
            shirt1.classList.remove('active');
            shirt2.classList.remove('active');
        });
    }
}
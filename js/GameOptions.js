import CardsManager from "./CardsManager.js";
import Difficulty from "./Difficulty.js";
import Shirt from "./Shirt.js";

export default class GameOptions {

    constructor() {
        this.cardsManager = new CardsManager();
        this.difficult = new Difficulty();
        this.shirt = new Shirt();
    }

    painting(gameField){
        this.cardsManager.setInstance(this.difficult.value);
        this.cardsManager.value.forEach((item) => {
            const cardContainer=document.createElement('div');
            cardContainer.className='item';
            cardContainer.classList.add(this.difficult.cardSize);
            gameField.appendChild(cardContainer);

            const theCard=document.createElement('div');
            theCard.classList.add('theCard');
            theCard.setAttribute('id', item.id);
            cardContainer.appendChild(theCard);

            const theFront=document.createElement('div');
            theFront.classList.add('theFront');
            theFront.classList.add(this.shirt.value);
            theCard.appendChild(theFront);

            const theBack=document.createElement('div');
            theBack.classList.add('theBack');
            theBack.classList.add(item.id);
            theCard.appendChild(theBack);
        });
    }
}
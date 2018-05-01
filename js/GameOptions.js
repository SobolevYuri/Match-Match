import Card from "./Card.js";
import Difficulty from "./Difficulty.js";
import Shirt from "./Shirt.js";

export default class GameOptions {

    constructor() {
        this.cards=new Card();
        this.difficult=new Difficulty();
        this.shirt=new Shirt();
    }

    painting(gameField){
        this.cards.setInstance(this.difficult.value);
        this.cards.value.forEach(function(item){
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
        }.bind(this));
    }
}
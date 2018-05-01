export default class NewGame {
    constructor(gameOptions){
        this.gameField=document.querySelector('.game-field');
        this.seconds=document.querySelector('#seconds');
        this.minutes=document.querySelector('#minutes');
        this.options=gameOptions;
        this.inMatch=false;
        this.prevCard=null;
        this.hiddenCardsCount=0;
        this.startNewGame();
    }

    startNewGame() {
        this.clearGameField();
        this.setTimer();
        this.options.painting(this.gameField);
        const arrayCardsFromPage = document.querySelectorAll('.theCard');
        arrayCardsFromPage.forEach((item)=>{
            item.addEventListener('click', this.checkClick.bind(this, {id: item.getAttribute('id'), cardPageElement: item}))
        })
    }

    setTimer() {
        this.timerActive=true;
        this.seconds.innerText=0;
        this.minutes.innerText=0;
        setTimeout(function tick() {
            if (this.timerActive){
                if (+this.seconds.innerText===59) {
                    this.seconds.innerText=0;
                    this.minutes.innerText++;
                } else this.seconds.innerText++;
                setTimeout(tick.bind(this), 1000);
            }
        }.bind(this), 1000);
    }

    stopTimer() {
        this.timerActive=false;
    }

    clearGameField(){
        while(this.gameField.firstChild) this.gameField.removeChild(this.gameField.firstChild);
    }

    checkClick(card) {
        if (this.inMatch){return}
        card.cardPageElement.classList.add('theCard-rotate');
        if (!this.prevCard) {
            this.prevCard = card;
        } else{
            this.inMatch=true;
            setTimeout(function() {this.matchCards(card)}.bind(this), 1000);
        }
    }

    matchCards(card) {
        this.inMatch = false;
        if (card.cardPageElement===this.prevCard.cardPageElement) {return}
        card.cardPageElement.classList.remove('theCard-rotate');
        this.prevCard.cardPageElement.classList.remove('theCard-rotate');
        if (card.id===this.prevCard.id) {
            card.cardPageElement.removeEventListener('click', this.checkClick);
            this.prevCard.cardPageElement.removeEventListener('click', this.checkClick);
            card.cardPageElement.classList.add('theCard-hidden');
            this.prevCard.cardPageElement.classList.add('theCard-hidden');
            this.hiddenCardsCount+=2;
            if (this.hiddenCardsCount===+this.options.difficult.value) this.finishGame();
        }
        this.prevCard = null;
    }

    finishGame() {
        this.clearGameField();
        this.stopTimer();
        const finishContainer=document.createElement('article');
        const finishMessage=document.createElement('span');
        const totalTime=document.createElement('span');
        const newLine=document.createElement('br');

        finishContainer.classList.add('conclusion');
        finishMessage.classList.add('conclusion');
        finishMessage.innerText='Victory. Our celebrations!';
        totalTime.classList.add('conclusion');
        totalTime.innerText='Your time: '+this.minutes.innerText+' minutes '+this.seconds.innerText+' seconds!';
        finishContainer.appendChild(finishMessage);
        finishContainer.appendChild(newLine);
        finishContainer.appendChild(totalTime);
        this.gameField.appendChild(finishContainer);
    }
}
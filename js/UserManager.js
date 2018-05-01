import Subscriber from "./Subscriber";
import LocalStorageManager from "./LocalStorageManager";

export default class UserManager extends Subscriber {

  constructor() {
    super();
    this.storageManager = new LocalStorageManager();
    this.init();
  }

  setEventsListeners() {
    const playerBtn = document.querySelector('#submitUserInfo');
    playerBtn.addEventListener('click', this.handleSubmit.bind(this));
  }

  init() {
    this.users = this.storageManager.getDataByKey('users') || [];
  }

  handleSubmit(event) {
    event.preventDefault();

    const darkBg = document.querySelector('.authorization');
    const formWin = document.querySelector('.dark-bg');
    const inputsArray = document.querySelectorAll('.auth-input');

    if (!this.checkFillInInputs.call(this, inputsArray)) {
      return;
    }

    if (!this.checkUniqueUser.call(this, inputsArray)) {
      this.currentUser = {
        firstName: inputsArray[0].value,
        lastName: inputsArray[1].value,
        email: inputsArray[2].value,
        results: {
          easy: 0,
          medium: 0,
          hard: 0,
        },
      };
      this.users.push(this.currentUser);
    } else {
      this.users.some((item) => {
        if (item.email === inputsArray[2].value) {
          this.currentUser = item;
          return true;
        }
        return false;
      });
    }

    darkBg.classList.add('hide-win');
    formWin.classList.add('hide-win');
  };

  checkUniqueUser(inputsArray) {
    return this.users.some((item) => {
      return item.email === inputsArray[2].value;
    });
  }

  checkFillInInputs(inputsArray) {
    return Array.prototype.every.call(inputsArray, (item) => {
      return item.value;
    });
  }

  getTopResultsTable(difficultyLevel, rezTime) {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.classList.add('rez-table');
    const tableHeaderRow = document.createElement('tr');
    const tableHeaderCell1 = document.createElement('th');
    const tableHeaderCell2 = document.createElement('th');
    const tableHeaderCell3 = document.createElement('th');

    tableHeaderCell3.innerText = 'User';
    tableHeaderCell1.innerText = 'User\'s email';
    tableHeaderCell2.innerText = difficultyLevel;
    tableHeaderRow.appendChild(tableHeaderCell3);
    tableHeaderRow.appendChild(tableHeaderCell1);
    tableHeaderRow.appendChild(tableHeaderCell2);
    table.appendChild(tableHeaderRow);

    this.users.forEach((item) => {
      if (item.email === this.currentUser.email) {
        item.results[difficultyLevel] = rezTime;
      }
    });
    console.log(this.users);
    this.writeUpdatedDataToStorage();

    const resultsArray = this.getResultsForOutput(difficultyLevel);

    resultsArray.forEach((item) => {
      const tableRow = document.createElement('tr');
      const tableCell1 = document.createElement('td');
      const tableCell2 = document.createElement('td');
      const tableCell3 = document.createElement('td');
      tableCell3.innerText = item.fullName;
      tableCell1.innerText = item.email;

      if (!item.rez) {
        tableCell2.innerText = 0;
      } else {
        tableCell2.innerText = item.rez.minutes + " min " + item.rez.seconds + " sec";
      }
      tableRow.appendChild(tableCell3);
      tableRow.appendChild(tableCell1);
      tableRow.appendChild(tableCell2);
      table.appendChild(tableRow);
    });

    return fragment.appendChild(table);
  }

  getResultsForOutput(difficultyLevel) {
    const tempArray = [];

    this.users.forEach((item) => {
      tempArray.push({
        email: item.email,
        fullName: item.firstName+" "+item.lastName,
        rez: item.results[difficultyLevel],
      });
    });

    const tempArrayLength = tempArray.length;
    let box;
    for (let i=0; i < tempArrayLength-1; i++)  {
      for(let j=i+1; j < tempArrayLength; j++) {
        if (tempArray[i].rez.valueOf() < tempArray[j].rez.valueOf()) {
          console.log("    " + tempArray[i].rez.valueOf() + "    " + tempArray[j].rez.valueOf());
          box = tempArray[i];
          tempArray[i] = tempArray[j];
          tempArray[j] = box;
        }
      }
    }

    if (tempArrayLength > 10) {
      tempArray.slice(0, 10);
    }

    return tempArray;
  }

  writeUpdatedDataToStorage() {
    this.storageManager.writeDataByKey('users', this.users);
  }
}

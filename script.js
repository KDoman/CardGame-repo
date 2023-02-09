const firstCard = document.querySelector(".firstCard");
const secondCard = document.querySelector(".secondCard");
const thirdCard = document.querySelector(".thirdCard");
const buttonStart = document.querySelector(".startBtn");
const buttonReset = document.querySelector(".resetBtn");
const tutorialButton = document.querySelector(".tutorialBtn");
const resetQuestion = document.querySelector("#resetQuestion");
const resetQuestionNo = document.querySelector("#resetQuestionNo");
const resetQuestionYes = document.querySelector("#resetQuestionYes");
const points5 = document.querySelector("#points5");
const points10 = document.querySelector("#points10");
const points5Ok = document.querySelector("#points5Ok");
const points10Ok = document.querySelector("#points10Ok");
const deckAndCounterCointainer = document.querySelector(
  "#DeckAndCounterCointainer"
);
const deck = document.querySelector("#deck");
const counter = document.querySelector("#counter");
const allCards = [firstCard, secondCard, thirdCard];
let points = 0;
firstCard.style.pointerEvents = `none`;
secondCard.style.pointerEvents = `none`;
thirdCard.style.pointerEvents = `none`;
const copyFirstCard = document.querySelector(`.copyFirstCard`);
const copySecondCard = document.querySelector(`.copySecondCard`);
const copyThirdCard = document.querySelector(`.copyThirdCard`);
const copyFirstCardNumber = document.querySelector(`.copyFirstCardNumber`);
const copySecondCardNumber = document.querySelector(`.copySecondCardNumber`);
const copyThirdCardNumber = document.querySelector(`.copyThirdCardNumber`);

// RANDOM COLOR FUNCTION
let randomColor = (card) => {
  let randomColor = Math.floor(Math.random() * 3);
  if (randomColor === 0) {
    card.style.backgroundColor = green;
  }
  if (randomColor === 1) {
    card.style.backgroundColor = blue;
  }
  if (randomColor === 2) {
    card.style.backgroundColor = red;
  }
};
// RANDOM NUMBER FUNCTION
let randomNumber = (card) => {
  let randomNum = Math.floor(Math.random() * 9);
  card.innerText = randomNum;
};
let copyCard = () => {
  copyFirstCard.innerText = firstCard.innerText;
  copyFirstCard.style.backgroundColor = firstCard.style.backgroundColor;
  copySecondCard.innerText = secondCard.innerText;
  copySecondCard.style.backgroundColor = secondCard.style.backgroundColor;
  copyThirdCard.innerText = thirdCard.innerText;
  copyThirdCard.style.backgroundColor = thirdCard.style.backgroundColor;
};
let copyCardNumber = () => {
  copyFirstCardNumber.innerText = firstCard.innerText;
  copyFirstCardNumber.style.backgroundColor = firstCard.style.backgroundColor;
  copySecondCardNumber.innerText = secondCard.innerText;
  copySecondCardNumber.style.backgroundColor = secondCard.style.backgroundColor;
  copyThirdCardNumber.innerText = thirdCard.innerText;
  copyThirdCardNumber.style.backgroundColor = thirdCard.style.backgroundColor;
};
// POINTS IF ALL CARDS HAS THE SAME COLOR (5 POINTS) OR NUMBER (20 POINTS)
let pointsForColor = () => {
  if (
    firstCard.style.backgroundColor == secondCard.style.backgroundColor &&
    secondCard.style.backgroundColor == thirdCard.style.backgroundColor
  ) {
    points += 5;
    points5.style.display = "block";
    counter.innerText = `Points: ${points}`;
    deck.style.zIndex = "-1";
    points5Ok.addEventListener("click", () => {
      // clear all cards
      allCards.forEach((card) => {
        card.style.backgroundColor = "grey";
        card.innerText = `X`;
        points5.style.display = "none";
      });
      deck.style.zIndex = "1";
    });
    copyCard();
  }
};
let pointsForNumber = () => {
  if (
    firstCard.innerText == secondCard.innerText &&
    secondCard.innerText == thirdCard.innerText
  ) {
    points += 20;
    points10.style.display = "block";
    counter.innerText = `Points: ${points}`;
    deck.style.zIndex = "-1";
    points10Ok.addEventListener("click", () => {
      // clear all cards
      allCards.forEach((card) => {
        card.style.backgroundColor = "grey";
        card.innerText = `X`;
        points10.style.display = "none";
      });
      deck.style.zIndex = "1";
    });
    copyCardNumber();
  }
};
let pointerEvent = () => {
  firstCard.style.pointerEvents = `auto`;
  secondCard.style.pointerEvents = `auto`;
  thirdCard.style.pointerEvents = `auto`;
};

// Hide reset button by default at the beggining
buttonReset.classList.add("resetBtnHide");

// ----------------Card colors
const green = `rgb(16, 195, 40)`;
const blue = `rgb(21, 126, 247)`;
const red = `rgb(225, 37, 37)`;
// ---------------START BUTTON
buttonStart.addEventListener(`click`, () => {
  pointerEvent();
  buttonStart.classList.add("startBtnHide");
  tutorialButton.classList.add("startBtnHide");

  buttonReset.classList.remove("resetBtnHide");
  deckAndCounterCointainer.style.display = `flex`;
  // ------------------random Color
  allCards.forEach((card) => {
    randomColor(card);
    randomNumber(card);
    // ------------------Random cards number from 0 to 9
    let randomNum = Math.floor(Math.random() * 9);
    card.innerText = randomNum;
  });
  pointsForColor();
  pointsForNumber();
  copyCard();
});

// --------------Reset button
buttonReset.addEventListener(`click`, () => {
  resetQuestion.style.display = `block`;
  resetQuestionYes.addEventListener(`click`, () => {
    deckAndCounterCointainer.style.display = `none`;
    allCards.forEach((card) => {
      card.style.backgroundColor = `grey`;
      card.innerText = "X";
    });
    buttonStart.classList.remove("startBtnHide");
    tutorialButton.classList.remove("startBtnHide");
    buttonReset.classList.add("resetBtnHide");
    deckCards = 30;
    deck.innerText = `Cards ${deckCards}`;
    points = 0;
    counter.innerText = `Points: 0`;
    resetQuestion.style.display = `none`;
  });
  resetQuestionNo.addEventListener(`click`, () => {
    resetQuestion.style.display = `none`;
  });
});

// Tutorial Button
tutorialButton.addEventListener(`click`, () => {});

// ------------deck Cards
deckCards = 30;
deck.addEventListener("click", () => {
  if (deckCards >= 1) {
    allCards.forEach((card) => {
      if (card.style.backgroundColor === `grey` && deckCards >= 1) {
        randomColor(card);
        randomNumber(card);
        deckCards -= 1;
        deck.innerText = `Cards ${deckCards}`;
        if (deckCards === 0) {
          deck.innerText = "Cards X";
        }
      }
    });
    pointsForColor();
    pointsForNumber();
    copyCard();
  } else {
    deck.innerText = `Cards X`;
    console.log("Out of cards");
  }
});

//------------------------------------Deleting one card from 3 cards deck
const cardAllertfirst = document.querySelector("#cardAllertFirst");
const cardAllertsecond = document.querySelector("#cardAllertSecond");
const cardAllertthird = document.querySelector("#cardAllertThird");
const firstCardAllertYes = document.querySelector(`#cardAllertFirstYes`);
const firstCardAllertNo = document.querySelector(`#cardAllertFirstNo`);
const secondCardAllertYes = document.querySelector(`#cardAllertSecondYes`);
const secondCardAllertNo = document.querySelector(`#cardAllertSecondNo`);
const thirdCardAllertYes = document.querySelector(`#cardAllertThirdYes`);
const thirdCardAllertNo = document.querySelector(`#cardAllertThirdNo`);

class generateRandomCard {
  constructor(card, allert, allertYes, allertNo) {
    this.card = card;
    this.allert = allert;
    this.allertYes = allertYes;
    this.allertNo = allertNo;
  }
  randomCard = () => {
    if (this.card.style.backgroundColor != `grey`) {
      this.allert.style.display = "block";
      this.allertYes.addEventListener(`click`, () => {
        this.card.innerText = "X";
        this.card.style.backgroundColor = `grey`;
        this.allert.style.display = "none";
      });
      this.allertNo.addEventListener(`click`, () => {
        this.allert.style.display = "none";
      });
    }
  };
}

const firstCardTest = new generateRandomCard(
  firstCard,
  cardAllertfirst,
  firstCardAllertYes,
  firstCardAllertNo
);
const secondCardTest = new generateRandomCard(
  secondCard,
  cardAllertsecond,
  secondCardAllertYes,
  secondCardAllertNo
);
const thirdCardTest = new generateRandomCard(
  thirdCard,
  cardAllertthird,
  thirdCardAllertYes,
  thirdCardAllertNo
);

// ----first Card
firstCard.addEventListener(`click`, firstCardTest.randomCard);
// -------second card
secondCard.addEventListener(`click`, secondCardTest.randomCard);
// -------thirdCard
thirdCard.addEventListener(`click`, thirdCardTest.randomCard);

// ----------------------------------------------------------------------------------------                TUTORIAL               ------------------------------------------------------------------
const firstTutorialWindow = document.querySelector(".tutorial-container-1");
const tutorialOkButton = document.querySelector(".tutorial-button-ok");

tutorialButton.addEventListener(`click`, () => {
  firstTutorialWindow.style.display = "block";
});

tutorialOkButton.addEventListener(`click`, () => {
  firstTutorialWindow.style.display = "none";
});

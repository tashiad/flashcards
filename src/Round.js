const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentageCorrect = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    currentTurn.evaluateGuess();
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    }
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    const numCorrect = this.turns - this.incorrectGuesses.length;
    return this.percentageCorrect = (numCorrect / this.turns) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.percentageCorrect}% of the questions correctly!`;
  }

}

module.exports = Round;

const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    currentTurn.evaluateGuess();
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }
    this.turns++;
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    const numCorrect = this.turns - this.incorrectGuesses.length;
    return (numCorrect / this.turns) * 100;
  }

  endRound() {
    console.log(`** Round over! ** You answered
      ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

}

module.exports = Round;

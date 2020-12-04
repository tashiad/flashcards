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
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctAnswers = this.turns - this.incorrectGuesses.length;
    return Math.floor(correctAnswers / this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

}

module.exports = Round;

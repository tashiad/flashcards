const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const numCorrect = this.deck.length - this.incorrectGuesses.length;
    return (numCorrect / this.deck.length) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

}

module.exports = Round;

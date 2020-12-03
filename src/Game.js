const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(item => {
      const card = new Card(item.id, item.question, item.answers, item.correctAnswer);
      return card;
    })
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    // this.printMessage(deck, this.currentRound)
    // this.printQuestion(this.currentRound)
  }

}

module.exports = Game;

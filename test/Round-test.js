const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round, turn;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should return the first card in the deck as the currentCard default', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it.skip('should create a new instance of Turn when a guess is made', function() {
    round.takeTurn();

    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should start out with 0 turn count', function() {
    expect(round.turns).to.equal(0);
  })

  it('should increase the turn count after a turn has been taken', function() {
    round.takeTurn();
    round.takeTurn();
    expect(round.turns).to.equal(2)
  })

  it('should increase the turn count regardless of whether the guess is correct or incorrect', function() {
    round.takeTurn('function');
    expect(round.turns).to.equal(1);

    round.takeTurn('array');
    expect(round.turns).to.equal(2);

    round.takeTurn('accessor method');
    expect(round.turns).to.equal(3);
  })

  it('should make the next card the current card after each turn', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);

    round.takeTurn();
    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn();
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  })

  it('should store incorrect guesses via id in an array', function() {
    round.takeTurn('function');
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('accessor method');
    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  })

  it.skip('should tell you if your guess was correct or incorrect', function() {
    round.takeTurn('function');
    expect(round.takeTurn()).to.equal('incorrect!');

    round.takeTurn('array');
    expect(round.takeTurn()).to.equal('correct!');

    round.takeTurn('accessor method');
    expect(round.takeTurn()).to.equal('incorrect!');
  })

  it('should calculate and return the percent of correct guesses', function() {
    round.takeTurn('function');
    round.takeTurn('array');
    round.takeTurn('accessor method');
    // round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(1/3 * 100)
  })

  it('should log end round phrase', function() {
    round.endRound();
  })

});

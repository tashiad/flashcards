const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

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
    expect(round.deck).to.deep.equal(deck);
  })

  it('should return the first card in the deck as the currentCard default', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it('should start out with 0 turn count', function() {
    expect(round.turns).to.equal(0);
  })

  it('should increase the turn count after a turn has been taken', function() {
    round.takeTurn('function');
    round.takeTurn('array');
    expect(round.turns).to.equal(2)
  })

  it('should increase the turn count regardless of whether the guess is correct or incorrect', function() {
    round.takeTurn('function'); // wrong
    expect(round.turns).to.equal(1);

    round.takeTurn('array'); // right
    expect(round.turns).to.equal(2);

    round.takeTurn('accessor method'); // wrong
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

  it('should tell you if your guess was correct or incorrect', function() {
    expect(round.takeTurn('function')).to.equal('incorrect!');

    expect(round.takeTurn('array')).to.equal('correct!');

    expect(round.takeTurn('accessor method')).to.equal('incorrect!');
  })

  it('should calculate and return the percent of correct guesses', function() {
    round.takeTurn('function'); // wrong
    expect(round.calculatePercentCorrect()).to.equal(0)

    round.takeTurn('array'); // right
    expect(round.calculatePercentCorrect()).to.equal(1 / 2 * 100)

    round.takeTurn('mutator method'); // right
    expect(round.calculatePercentCorrect()).to.equal(2 / 3 * 100)
  })

});

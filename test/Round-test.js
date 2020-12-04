const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What kind of bear is best?', ['bears', 'beets', 'Battlestar Galactica'], 'bears');
    card2 = new Card(2, 'What is Pams favorite flavor of yogurt?', ['vanilla', 'strawberry', 'mixed berry'], 'mixed berry');
    card3 = new Card(3, 'Which cat of Angelas did Dwight kill?', ['Milky Way', 'Sprinkles', 'Philip'], 'Sprinkles');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should have a deck', () => {
    expect(round.deck).to.deep.equal(deck);
  })

  it('should start out with 0 turns', () => {
    expect(round.turns).to.equal(0);
  })

  it('should return the first card in the deck to start', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  })

  it('should increase turns after a turn has been taken', () => {
    round.takeTurn('bears');
    round.takeTurn('strawberry');
    expect(round.turns).to.equal(2);
  })

  it('should increase turns for both correct and incorrect guesses', () => {
    round.takeTurn('beets');
    expect(round.turns).to.equal(1);

    round.takeTurn('mixed berry');
    expect(round.turns).to.equal(2);

    round.takeTurn('Philip');
    expect(round.turns).to.equal(3);
  })

  it('should make the next card the current card after each turn', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn('beets');
    expect(round.returnCurrentCard()).to.deep.equal(card2);
    round.takeTurn('strawberry');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  })

  it('should start out with 0 incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should store incorrect guesses via id in an array', () => {
    round.takeTurn('beets');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('mixed berry');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('Philip');
    expect(round.incorrectGuesses).to.deep.equal([1, 3]);
  })

  it('should return whether your guess was correct or incorrect', () => {
    expect(round.takeTurn('beets')).to.equal('incorrect!');
    expect(round.takeTurn('mixed berry')).to.equal('correct!');
    expect(round.takeTurn('Philip')).to.equal('incorrect!');
  })

  it('should return the percent of correct guesses', () => {
    round.takeTurn('beets');
    expect(round.calculatePercentCorrect()).to.equal(0);
    round.takeTurn('mixed berry');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('Sprinkles');
    expect(round.calculatePercentCorrect()).to.equal(66);
  })

})

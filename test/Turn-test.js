const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn1, turn2, turn3;

  beforeEach(() => {
    card = new Card(1, 'What kind of bear is best?', ['bears', 'beets', 'Battlestar Galactica'], 'bears');
    turn1 = new Turn('bears', card);
    turn2 = new Turn('beets', card);
    turn3 = new Turn('Battlestar Galactica', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should return a guess', () => {
    expect(turn1.returnGuess()).to.equal('bears');
  });

  it('should return a card', () => {
    expect(turn1.returnCard()).to.deep.equal({
      id: 1,
      question: 'What kind of bear is best?',
      answers: ['bears', 'beets', 'Battlestar Galactica'],
      correctAnswer: 'bears'
    });
  });

  it('should return a boolean if the guess matches the correct answer', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it('should return ‘incorrect!’ or ‘correct!’ based on guess eval', () => {
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn3.giveFeedback()).to.equal('incorrect!');
  });

});

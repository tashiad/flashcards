const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return a card', function() {
    const card = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    const turn = new Turn('splice()', card);
    expect(turn.returnCard()).to.deep.equal({
      id: 7,
      question: 'Which array prototype is not an accessor method?',
      answers: ['join()', 'slice()', 'splice()'],
      correctAnswer: 'splice()'
    });
  });

  it('should indicate if the guess matches the correct answer on the card', function() {
    const card = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    const turn1 = new Turn('reduce()', card);
    const turn2 = new Turn('map()', card);
    const turn3 = new Turn('filter()', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(false);
  });

  it('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const card = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    const turn1 = new Turn('reduce()', card);
    const turn2 = new Turn('map()', card);
    const turn3 = new Turn('filter()', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn3.evaluateGuess()).to.equal(false);
    expect(turn3.giveFeedback()).to.equal('incorrect!');
  });

});

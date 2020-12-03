const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should return the number of cards in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    const card3 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'], 'reduce()');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });

});

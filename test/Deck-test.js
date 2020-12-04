const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck, card1, card2, card3;

  beforeEach( () => {
    card1 = new Card(1, 'What kind of bear is best?', ['bears', 'beets', 'Battlestar Galactica'], 'bears');
    card2 = new Card(2, 'What is Pams favorite flavor of yogurt?', ['vanilla', 'strawberry', 'mixed berry'], 'mixed berry');
    card3 = new Card(3, 'Which cat of Angelas did Dwight kill?', ['Milky Way', 'Sprinkles', 'Philip'], 'Sprinkles');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should contain an array of cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the number of cards in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });

});

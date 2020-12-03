const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(1, 'What kind of bear is best?', ['bears', 'beets', 'Battlestar Galactica'], 'bears');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have an id', () => {
    expect(card.id).to.equal(1);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What kind of bear is best?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['bears', 'beets', 'Battlestar Galactica']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('bears');
  });

});

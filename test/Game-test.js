const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should keep track of the currentRound', () => {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

})

# FlashCards

A little flash cards application that runs in the command line interface (CLI). A user can see the questions, take guesses, and see a final score at the end of the round.

## Project Goals

* Contribute code to an partially constructed object-oriented application
* Follow spec/prompts to make a working application
* Implement ES6 classes
* Write modular, reusable code that follows SRP (Single Responsibility Principle)
* Implement a robust testing suite using TDD

**I also got some more practice using a GitHub Project Board. You can check it out [here](https://github.com/tashiad/flashcards/projects/1).**

## Contributors

Myself, and the occasional pick-me-up from my lovely mentor, [@farmermel](https://github.com/farmermel).

## Technologies

* JavaScript
* GitHub
* Git
* Atom
* Mocha
* Chai

## Setup

In your terminal: clone down the repo, then change into the directory and run `npm install` to install the library dependencies.

## Running the Application

Running `node index.js` from the directory should result in the following message being displayed:

```zsh
Node server running on port 3000
Welcome to FlashCards! You are playing with 30 cards.
-----------------------------------------------------------------------
? What allows you to define a set of related information using key-value pairs?

  1) object
  2) array
  3) function
  Answer:
```

For each question, select an answer by typing either 1, 2, or 3 and then hit `enter`. The application will let you know if your guess was correct or not. Hit `enter` again to move onto the next question. Once you play through the entire deck of 30 cards, it will let you know the percentage of answers you got right.

![flash cards example gif](https://media.giphy.com/media/d5d4ERO1B5tsPzyu59/giphy.gif)

To play again, `control c` to exit the application and then type `node index.js` to start from the beginning of the deck.

## Future Features

It would be helpful to add a **review incorrect answers** functionality. Instead of ending the game after you’ve gone through all of the cards, you can continue reviewing only the cards that you guessed incorrectly until there are none left (all have been answered correctly).

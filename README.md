# Connect Four APP

## About
This is a demo of using React to create an SPA for playing a game of Connect Four against an AI Bot.

The app is based on the `create-react-app` template.

The primary logic for the app can be found in `src/App.js`.

## Overview
Given time constraints to complete, I had to prioritize what I wanted to accomplish in the app. In the time allotted, I was able to:
1. Connect to the API endpoint in response to user 'moves' (column selections)
2. Manage the game's state until completion (win, lose, or tie)
3. Provide user feedback on completion (win, lose, or draw)
4. Allow the user to reset the game at any point
5. Add some animations (and bonus animated gifs) upon game completion

Given more time, I would have expanded on the app to include some additional features and concepts:
1. For the sake of user experience, I would have like to play up the **narrative aspect** of 'human vs robot' through additional context, copy and images. Too add a little personality to the game, the winning and losing states include some funny images of humans and robots fighting, but additional story development could help bolster this concept.
2. I would want to further develop **the animation and physics around the physical pieces**. For simplicity, I modeled each 'space' in the Connect Four board as a single React component. This simplified development, but constrained the ability to do things like animating the pieces 'dropping in' to the board when the player makes a move. At the start of the project, I created a sketch of this effect in d3, but didn't have time to incorporate it into the final app:
[Physics](timmarco.github.com/connect-four/public/physics.gif)
3. I would have like to use the `localStorage` API to **record and visualize the player's history** and plot wins vs. losses against different difficulty levels over time.
4. Currently, the game always assumes that the human player should make the first move (perhaps we're playing against a particularly polite robot who always defers to their human opponent). With a few small tweaks, I could have **randomized which player goes first in the game**, which may affect the logic and strategy for the players.
5. Make a more mobile-friendly version of the app. While I have tested the app and confirms that its basic functionality works on an iPhone, my design and development process for this example was explicitly **desktop-first**
6. Add **robust error handling**. For this exercise, I'm making the dangerous assumption that the API will always return a value upon a request. Obviously, this would be a very bad assumption to make in an actual production environment.
7. **Test** every part of the app robustly. For this project, I was working alone to create a demo game. Given the time constraints, I cut corners in terms of testing and reliability. In a real environment, especially working with other devs, this would be an unacceptable shortcut.

## Structure
Fundamentally the app is structure into basic `components` and `overlays`, and some `utility` functions for managing state and validating game completion.

The base of the file can be found in `scripts/App.js`. Here, I instantiate the preliminary game state and return the `<Board />` component, along with the `overlays` that will pop up throughout the game's lifecycle.

`src/components` holds the JS / JSX files that model the Connect Four game itself:
- `<Board />`: the board in its entirety
- `<Colummn />`: the seven selectable columns in the playfield
- `<Space />`: which represents the individual locations where a piece can be dropped, as well as the selected pieces (via an `<svg/>` element containing `<circle />` and `<text />` children)
- `<ResetGameButton />` which allows the user to start over at any point

`src/overlays` holds the JS / JSX files for the UI overlays that happen throughout the game's lifecycle:
- `<BotThinkingOverlay />` restricts inputs and provides feedback as the app requests a response from the API
- `<DifficultyOverlay />` pops up at the beginning of the game and prompts the user to select the opponent's difficulty level
- `<GameOverOverlay />` presents the results of the game to the user

`src/utils` includes some utility functions and non-react code for the app:
- `src/utils/gameValidator/` includes the code for finding the pieces in the `gameState` that resulted in a win. This code is executed at the end of the game and is needed to provide animated feedback to show the four (or more) contiguous winning pieces. For ease of testing and validation, this process is broken down into the simplest steps / isolated functions possible
- `instantiateState.js` creates a 7x6 array used to populate the initial `gameState`
- `resetSvgs.js` is a utility function for resetting the pieces at the end of a game
- `sparkDelight.js` uses d3 to create the animations showing the winning pieces at the end of the game by transforming the relevant `<g>` elements and adding animated lines to focus the user's attention
- `urlConstructor` returns the specific URL at the API endpoint needed for any user move request

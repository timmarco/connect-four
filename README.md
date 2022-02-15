# Connect Four App Update 2/15/2022

## About
This is an updated version of the Connect Four SPA on the [main branch](https://github.com/timmarco/connect-four).

This version is [live on my site](https://timmarco.com/connect-four-update) at a https://timmarco.com/connect-four-update.

I've been working on these updates to hone my React skills and improve the overall UX of the initial app.

## Biggest Changes

I've updated both the **UX** of the game itself and **improved the code** in several places.

## UX

### Game Pieces & Drop Animations
I wasn't satisfied with the initial user experience, particularly as it relates to the animation around game pieces. Rather than simply *appearing*, I wanted the pieces to *realistically drop* into position, like this:
(https://github.com/timmarco/connect-four/blob/main/public/physics.gif?raw=true)

Rather than displaying an 'H' for *human players* and 'B' for *bots*, I added some simple graphics to help further distinguish the pieces on the board.

I implemented those animations via `d3.transition`, with crude physics for the time and easing of the drops. I also added a small 'clack' animation that plays when the pieces collide with the existing game.

### Sound
I added a few sound effects (sourced via [freesound.org](https://www.freesound.org)) to make a more 'game-like' experience. That includes a 'clack' sound when pieces drop in to place, and small themes for winning and losing games.

### Win State Animation
I made some minor changes to the winning state animation that are a little more physically-realistic.

## Code
Overall, I spend some time refactoring the code in the app to be more *'React-like'*.

### App.js
Most of the bigger changes can be found in the [root JS file] (https://github.com/timmarco/connect-four/blob/update/src/App.js).

I restructured the functions in the code to be smaller and more manageable. To the extent possible, I extracted non-stateful functionality into the (utils directory) [https://github.com/timmarco/connect-four/tree/update/src/utils] (e.g., game validation, checking for winners, etc.) as more testable, pure functions.

For functionality that is inherently stateful (e.g., logic for displaying overlays), I tried to create the simplest functions possible for readability.

I simplifed the `import` statements at the top by creating a single `utils` module that would be easier to manage.

### Checking for Winners
Previously, I relied on responses from the API to determine whether the game was over. This worked well enough, but required unnecessary API calls when the *human player* was victorious. To speed games up, and remove unnecessary API calls, the app now checks for a winning state (e.g., four connected tokens) before fetching from the API.

### Space Component
The ]initial version](https://github.com/timmarco/connect-four/blob/main/src/components/Space.js) of the `<Space />` component was a bit of a mess, with unnecessary local variables and a lot of convoluted imperative logic. I [restructured that component] (https://github.com/timmarco/connect-four/blob/update/src/components/Space.js) to behave in a more typical React manner by:

1. Creating a `ref` to the circle that represents the game piece
2. Implementing `useEffect` on `props.tokenState` to run animations and change state
3. Separating the (side effect) presentation and animation logic into distinct, [individual files](https://github.com/timmarco/connect-four/tree/update/src/components/Space)

This allowed both improved user experience (with the drop animations) and a simpler, cleaner component whose display is affected *entirely* by its `props`

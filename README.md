# Tic-Tac-Toe

A clean, responsive, and interactive Tic-Tac-Toe game built with Vanilla JavaScript, HTML5, and CSS3. This project demonstrates DOM manipulation, event handling, and game logic implementation.

---

## 🎮 Features

- **Dynamic Board:** 3x3 grid with interactive cell selection
- **Turn Management:** Automatic switching between Player X and Player O
- **Hover Effects:** Context-aware hover states showing the current player's mark
- **Win/Draw Detection:** Real-time checking against all 8 winning combinations
- **Game Reset:** Restart functionality to clear the board and reset state without refreshing the page

---

## 🛠️ Logic Overview

The game is built using a functional approach in JavaScript:

- **State Tracking:** Uses a boolean `circleTurn` to toggle between marks
- **Winning Combinations:** Validates the board using a 2D array of indices:

  ```js
  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  ```

- **Event Handling:** Utilizes the `{ once: true }` event listener property to ensure cells can only be clicked once per round

---

## 📂 File Structure

- `index.html` — The semantic structure of the game board and win message overlay
- `script.js` — The engine handling turn logic, win conditions, and UI updates
- `styles.css` — Handles the grid layout and the visual X/O marks

---

## 🕹️ How to Play

1. Open `index.html` in any modern web browser
2. Player X always starts first
3. Hover over a cell to see a preview of your move
4. Click an empty cell to place your mark
5. The game will announce a winner or a draw automatically
6. Click the Restart button to play again

---

## 🤖 Future AI Integration (Roadmap)

As part of this LangChain & Hugging Face repository, this game serves as a frontend base. Future updates will include:

- **AI Opponent:** Integrating a Hugging Face model to predict the best next move
- **Natural Language Control:** Using LangChain to allow users to play moves via voice or text commands (e.g., "Place my X in the center")

---

## 📄 License

This project is licensed under the MIT License.

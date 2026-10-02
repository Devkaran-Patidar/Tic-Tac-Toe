# Tic Tac Toe Game

<div align="center">


A fully functional, interactive Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Play against another player with a clean, responsive interface and modern UI/UX design.

[Play Now](#getting-started) • [Features](#features) • [Technologies](#technologies-used)

</div>

---

## Overview

This project is a classic Tic Tac Toe game implementation with a modern twist. It features a responsive design that works seamlessly on both desktop and mobile devices, elegant animations, and intuitive controls. Two players can compete by taking turns placing their marks (X and O) on a 3×3 grid, with the goal of getting three in a row.

---

## Features

✨ **Core Gameplay**
- Two-player turn-based gameplay (X and O)
- Real-time winner detection with 8 possible winning patterns
- Draw detection when all cells are filled with no winner
- Visual feedback for game status (winner announcement, draw notification)

🎨 **User Experience**
- Clean and modern UI with a dark theme
- Smooth animations and transitions
- Hover and click effects for interactive feedback
- Responsive design that adapts to all screen sizes (mobile, tablet, desktop)
- Pop-in animation for winner/draw messages

🔄 **Game Controls**
- **Reset Game**: Clears the board and starts a new game
- **New Game**: Starts a fresh game after a winner is determined
- Disabled state for boxes after selection to prevent overwriting

---

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with flexbox layout, animations, media queries, and gradient effects
- **JavaScript (ES6)**: Game logic, event handling, and DOM manipulation

**Language Composition:**
- CSS: 47%
- JavaScript: 35.2%
- HTML: 17.8%

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Devkaran-Patidar/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
   ```

2. **Open the game:**
   - Double-click `index.html` to open in your default browser, or
   - Right-click `index.html` → Open with → Choose your browser

3. **Start playing:**
   - Player O goes first
   - Click any empty box to make your move
   - First player to get three marks in a row (horizontally, vertically, or diagonally) wins!

---

## How to Play

1. **Player O's Turn**: Click on any empty cell in the grid to place an O
2. **Player X's Turn**: The game switches to Player X who clicks on another empty cell
3. **Win Condition**: Get three marks in a line (horizontal, vertical, or diagonal)
4. **Draw**: If all 9 cells are filled with no winner, the game ends in a draw
5. **Reset**: Click "Reset Game" to clear the board and play again
6. **New Game**: After a win/draw, click "New Game" to start fresh

---

## Game Logic

### Winning Patterns
The game checks 8 winning patterns:

```javascript
[0,1,2],  // Top row
[0,3,6],  // Left column
[0,4,8],  // Diagonal (top-left to bottom-right)
[1,4,7],  // Middle column
[2,5,8],  // Right column
[2,4,6],  // Diagonal (top-right to bottom-left)
[3,4,5],  // Middle row
[6,7,8]   // Bottom row
```

### Key Functions

- `resetGame()`: Resets all game variables and enables all boxes
- `checkwinner()`: Checks if the current move results in a win
- `showWinner()`: Displays the winner and disables further moves
- `gameDraw()`: Handles draw scenario
- `disableBoxes()` / `enableBoxes()`: Manages box interactivity

---

## Project Structure

```
Tic-Tac-Toe/
├── index.html      # Main HTML structure
├── index.css       # Styling and animations
├── index.js        # Game logic and interactivity
├── image/          # Game assets and favicon
└── README.md       # Project documentation
```

---

## Features Breakdown

### Responsive Design
The game adapts to all screen sizes with dedicated media queries for mobile devices (max-width: 768px), ensuring a great experience on:
- Desktop computers
- Tablets
- Smartphones

### Visual Enhancements
- **Glow Animation**: Dynamic box-shadow effects on game elements
- **Pop-in Animation**: Winner message appears with a smooth scaling transition
- **Hover Effects**: Boxes scale up on hover with a cursor pointer
- **Active States**: Click feedback with scale-down animation
- **Shadow Effects**: Depth and dimension through box-shadows

---

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancement Ideas

- 🤖 Single-player mode with AI opponent
- 🎮 Difficulty levels for AI
- 📊 Game statistics and win tracking
- 🎵 Sound effects for moves and wins
- 🎨 Theme customization (dark/light mode)
- ⚙️ Local storage for game history
- 🌐 Multiplayer online functionality
- 🏆 Leaderboard system

---

## Code Quality

The codebase follows best practices:
- Semantic HTML5 markup
- Modern JavaScript ES6+ features
- CSS3 with no external frameworks
- Comments and clear variable naming
- Organized and modular function structure
- Proper event delegation and DOM manipulation

---

## Performance

- **Lightweight**: No dependencies or heavy libraries
- **Fast Load Time**: Minimal file sizes (HTML, CSS, JS optimized)
- **Smooth Animations**: Hardware-accelerated CSS transforms
- **Efficient DOM Manipulation**: Selective updates and queries

---

## License

This project is open source and available under the MIT License.

---

## Author

**Devkaran Patidar**

Feel free to fork this repository, submit issues, and contribute improvements!

---

## Acknowledgments

- Built with vanilla web technologies
- Inspired by the classic Tic Tac Toe game
- Designed with modern UI/UX principles

---

<div align="center">

**Enjoy the game! 🎮**

[Back to Top](#tic-tac-toe-game)

</div>
![alt text](<Screenshot 2026-07-13 232731.png>)

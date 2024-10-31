# Huuuge-Casino

Here's a `README.md` description for your Node.js slot machine console game code, tailored for GitHub:

```markdown
# Slot Machine Console Game

This is a console-based slot machine game developed in Node.js. Players can deposit money, place bets on multiple lines, and spin the reels to try their luck. Winning is based on matching symbols across rows.

## Features
- **Deposit System**: Players start by entering a deposit amount.
- **Line Selection**: Players choose the number of lines (1-3) to bet on.
- **Betting System**: Players set a bet per line, with checks to ensure it fits within their balance.
- **Randomized Spin**: The reels randomly display symbols, each with predefined counts and values.
- **Winning Calculation**: Winnings depend on symbol matches, with each symbol type having a specific payout value.

## Symbols
Each symbol has a set frequency and value:
- **A**: Appears 2 times, valued at 5 points
- **B**: Appears 4 times, valued at 4 points
- **C**: Appears 6 times, valued at 3 points
- **D**: Appears 8 times, valued at 2 points

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/slot-machine-console-game.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To start the game, run:
```bash
node index.js
```

## How to Play
1. **Deposit an amount** to start the game.
2. **Select the number of lines** to bet on (between 1 and 3).
3. **Set a bet per line** based on your balance and chosen lines.
4. **Spin the reels** and view the results.
5. If symbols in a row match, you win based on the symbol’s assigned value.

## Code Overview
- **`deposit`**: Prompts the player to input a valid deposit amount.
- **`getNumberOfLines`**: Prompts for the number of lines to bet on.
- **`getBet`**: Prompts for the bet per line, ensuring it's within the balance range.
- **`spin`**: Generates a 3x3 grid of symbols, randomized by predefined frequencies.
- **`transpose`**: Rearranges columns to rows for easier evaluation.
- **`getWinning`**: Calculates winnings by matching symbols in the rows the player bet on.
- **`printRows`**: Prints the rows to display the result of each spin.

## Example Gameplay
```plaintext
Enter a deposit amount: 100
Enter the number of lines to bet on (1-3): 3
Enter the bet per line: 10
You win, $50
```

## License
This project is open-source and available under the [MIT License](LICENSE).
```

Replace `yourusername` with your GitHub username if you add this to your repository. This `README.md` includes game setup, features, symbol values, gameplay steps, and example output to help users understand and run the code.

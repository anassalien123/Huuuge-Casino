const { application } = require("express");

const prompt = require("prompt-sync")();

const ROWS  = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};


const deposit = () => {
    while(true) {
        const depositAmount  = prompt("Enter a desposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again,");
        }else{
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines  = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again,");
        }else{
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true) {
        const bet  = prompt("Enter the bet per line: ");
        const numberbet = parseFloat(bet);

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines){
            console.log("Invalid bet, try again,");
        }else{
            return numberbet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i < ROWS; i++) {
        rows.push([]);
        for(let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getWinning = (rows,bet, lines) => {
    let winning = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winning += bet * SYMBOLS_VALUES[symbols[0]];
        }
    }
    return winning;
};

const theScore = (ROWS) => {
    if (core = false) {
        const winning = bet * application[symbols[0]]
        console.log("You have a p")
    }
}

let balance = deposit();
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance, NumberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winning = getWinning(rows, bet, NumberOfLines);
console.log("You win, $" + winning.toString());

































// function repetitions(s) {
//     if (s.length === 0) return 0; 

//     let maxCount = 1; 
//     let currentCount = 1; 

//     for (let i = 1; i < s.length; i++) {
    
//         if (s[i] === s[i - 1]) {
//             currentCount++; 
//         } else {

//             if (currentCount > maxCount) {
//                 maxCount = currentCount; 
//             }
//             currentCount = 1; 
//         }
//     }

    
//     if (currentCount > maxCount) {
//         maxCount = currentCount;
//     }

//     return maxCount;
// }
// console.log(repetitions("AAAAAVVVWWWWWWW"));
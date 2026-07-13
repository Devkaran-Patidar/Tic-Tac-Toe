let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Scoreboard elements
let scoreXElem = document.getElementById("score-x");
let scoreOElem = document.getElementById("score-o");
let scoreDrawElem = document.getElementById("score-draw");

let turnO = true; // true = Player O, false = Player X
let count = 0; // To Track Draw

// Scores
let scoreX = 0;
let scoreO = 0;
let scoreDraws = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const updateScoreboard = () => {
    scoreXElem.innerText = scoreX;
    scoreOElem.innerText = scoreO;
    scoreDrawElem.innerText = scoreDraws;
};

const resetBoard = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.classList.remove("win-highlight", "x", "o");
    });
};

const resetGame = () => {
    resetBoard();
    scoreX = 0;
    scoreO = 0;
    scoreDraws = 0;
    updateScoreboard();
};

const playAgain = () => {
    resetBoard();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const showWinner = (winner, pattern) => {
    if (winner === "X") {
        scoreX++;
    } else {
        scoreO++;
    }
    updateScoreboard();

    // Highlight winning boxes
    pattern.forEach(index => {
        boxes[index].classList.add("win-highlight");
    });

    setTimeout(() => {
        msg.innerText = `Winner is ${winner}!`;
        msgContainer.classList.remove("hide");
    }, 800); // Delay to let user see the winning line

    disableBoxes();
};

const gameDraw = () => {
    scoreDraws++;
    updateScoreboard();
    
    setTimeout(() => {
        msg.innerText = `It's a Draw!`;
        msgContainer.classList.remove("hide");
    }, 500);
    
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val, pattern);
                return true;
            }
        }
    }
    return false;
};

newGameBtn.addEventListener("click", playAgain);
resetBtn.addEventListener("click", resetGame);
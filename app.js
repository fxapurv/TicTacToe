let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");



let turnO = true;

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
}
const disableBtns = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2=== val3) {
                showWinner(val1);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);
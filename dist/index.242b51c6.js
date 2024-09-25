const board = document.querySelector(".game-container");
const button = document.querySelector(".btn");
const winMessage = document.querySelector(".winner");
let turn = "X";
function listenBoard() {
    board.addEventListener("click", runGame);
}
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    const target = e.target;
    // Ensure that the clicked element is a box and has a valid id
    if (!target || !target.id.startsWith("box-")) return;
    const box = document.querySelector(`#${target.id}`); // This is to obtain the id of the specific box clicked.
    if (box === null || box.textContent !== "") return;
    box.textContent = turn;
    changeBoxBackground(box);
    const winner = checkWinner();
    //The reason for the switch to work perfectly and not change if box clicked twice is because this is called after all of the box checks.
    //It won't switch the player when clicked on the box again.
    if (!winner) switchPlayer();
    else endGame();
}
function changeBoxBackground(box) {
    if (turn === "X") box.classList.replace("box", "x");
    else box.classList.replace("box", "o");
}
/* CODE FROM TUTORIAL THAT SHOWED ERROR
function runGame(e: Event): void {
  const boxId: string | null = (<HTMLElement>e.target).id;
  if (boxId === null) return;
  const box: HTMLElement | null = document.querySelector(`#${boxId}`);
  if (box === null || box.textContent !== "") return;
  box.textContent = turn;
  const winner: boolean = checkWinner();

  if (!winner) {
    switchPlayer();
  } else {
    endGame();
  }
}
*/ function endGame() {
    board.removeEventListener("click", runGame);
    button.addEventListener("click", resetGame);
    if (winMessage === null) return;
    winMessage.textContent = `Winner is ${turn}!!!`;
    winMessage.setAttribute("display", "block");
    button.style.visibility = "visible";
}
function resetGame() {
    turn = "X";
    resetBoxes();
    button.style.visibility = "hidden";
    winMessage.textContent = "";
    board.addEventListener("click", runGame);
}
function resetBoxes() {
    for(let i = 0; i <= 8; i++){
        const box = document.querySelector(`#box-${i}`);
        box.textContent = "";
        //resetting animation
        const boxClass = box.className;
        box.classList.remove(boxClass);
        box.offsetWidth; //trip and reset it - we want to reset all the animation
        box.classList.add("box");
    }
}
function checkWinner() {
    const boxes = getBoxes();
    return boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "" || boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "" || boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "" || boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "" || boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "" || boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "" || boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "" || boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== "";
}
function getBoxes() {
    const boxesContent = [];
    for(let i = 0; i < 9; i++){
        const box = document.querySelector(`#box-${i}`);
        const boxContent = box.textContent;
        if (boxContent === null) boxesContent.push("");
        else boxesContent.push(boxContent);
    }
    return boxesContent;
}
function switchPlayer() {
    if (turn === "X") turn = "O";
    else turn = "X";
}
function createBoard() {
    for(let i = 0; i < 9; i++)makeBox(i);
}
function makeBox(i) {
    //creating the first box
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`; //creating a different id for each box created in the for loop.
    box.textContent = "";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map

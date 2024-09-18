const board = document.querySelector(".game-container");
function listenBoard() {
    board.addEventListener("click", runGame);
}
function main() {
    createBoard();
    listenBoard();
}
function runGame(e) {
    const boxId = e.target.id;
    console.log(boxId);
    if (boxId === null) return;
    const box = document.querySelector(`#${boxId}`);
}
function createBoard() {
    for(let i = 0; i < 9; i++)makeBox(i);
}
function makeBox(i) {
    //creating the first box
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`; //creating a different id for each box created in the for loop.
    box.textContent = "X";
    board.append(box);
}
main();

//# sourceMappingURL=index.242b51c6.js.map

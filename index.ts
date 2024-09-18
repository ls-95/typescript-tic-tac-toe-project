const board = document.querySelector(".game-container") as HTMLElement;

function main(): void {
  createBoard();
}

function createBoard(): void {
  for (let i = 0; i < 9; i++) makeBox(i);
}

function makeBox(i: number): void {
  //creating the first box
  const box: HTMLDivElement = document.createElement("div");
  box.className = "box";
  box.id = `box-${i}`; //creating a different id for each box created in the for loop.
  box.textContent = "X";
  board.append(box);
}

main();

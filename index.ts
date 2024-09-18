const board = document.querySelector(".game-container") as HTMLElement;

function listenBoard(): void {
  board.addEventListener("click", runGame);
}

function main(): void {
  createBoard();
  listenBoard();
}

function runGame(e: Event): void {
  const boxId: string | null = (<HTMLElement>e.target).id;
  console.log(boxId);
  if (boxId === null) return;
  const box: HTMLElement | null = document.querySelector(`#${boxId}`);
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

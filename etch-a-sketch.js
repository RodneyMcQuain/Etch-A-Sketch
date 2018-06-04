const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);

var btClear = document.getElementById("button");
btClear.addEventListener('click', removeGrid);

/* function clear() {
  let insides = document.getElementsByClassName("inside");
  for (var i = 0; i < insides.length; i++) {
      insides[i].style.backgroundColor = "white";		
  }
  createGrid();
} */

function createGrid(gridSize) {
    var containerDivPixels = 30 * gridSize;
    var gridNum = gridSize * gridSize;
  
    containerDiv = document.getElementById("containerDiv");
    containerDiv.style.width = containerDivPixels + "px";
    containerDiv.style.height = containerDivPixels + "px";

    for (var i = 0; i < gridNum; i++) {
        div = document.createElement("div");
  	div.className = "inside";
  	div.idName = "div";
  
 	div.addEventListener('mouseover', changeColor);
	containerDiv.append(div);
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

function removeGrid() {
    var insides = document.getElementsByClassName("inside");
  
    while(insides[0])
         insides[0].parentNode.removeChild(insides[0])
    
    var gridSize = window.prompt("New grid size?");
    createGrid(gridSize);
}

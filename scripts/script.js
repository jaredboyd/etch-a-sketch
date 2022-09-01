let inkIsBlack = true
let rows = 16

//Dynamically create grid of divs as the "canvas"
function generateCanvasDivs(rows) {
  clearCanvas()
  let width = 600 / rows + 'px'
  let height = 400 / rows + 'px'
  let canvas = document.querySelector('.canvas')
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div')
    row.className = 'row';
    for (let j = 0; j < rows; j++) {
      let cell = document.createElement('div')
      cell.className = 'gridsquare'
      cell.style.width = width
      cell.style.height = height
      //Currently setting a random background color. Need to update to change to black on mouseover
      cell.onmouseover = function () {
        this.style.backgroundColor = getDrawColor()
      }
      row.appendChild(cell)
    }
    canvas.appendChild(row)
  }
}

function clearCanvas() {
  document.querySelector('.canvas').replaceChildren()
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function getDrawColor() {
  if (inkIsBlack) {
    return 'black'
  } else {
    return randomColor()
  }
}

//Handle click on color selector knob
window.onload = function () {
  document.querySelector('#colorSelector').addEventListener('click', changeInkColor)
}

function changeInkColor() {
  let colorSelector = document.querySelector('#colorSelector')
  if (inkIsBlack) {
    inkIsBlack = false
    colorSelector.classList.remove('blackInk')
    colorSelector.classList.add('rainbowInk')
  } else {
    inkIsBlack = true
    colorSelector.classList.remove('rainbowInk')
    colorSelector.classList.add('blackInk')
  }
}

function changeResolution() {
  let resolution = document.querySelector('#resolution').value
  generateCanvasDivs(resolution)
}



setTimeout(function () { generateCanvasDivs(16) }, 100)
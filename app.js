let color;
let allradio = document.querySelectorAll("input[type=radio]");
allradio.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    color = e.target.id;

    let allDiv = document.querySelectorAll("input[type=radio] + label div ");
    allDiv.forEach((div) => {
      div.style.backgroundColor = "white";
    });
    document.querySelector(
      "input[type=radio]:checked + label div "
    ).style.backgroundColor = color;
  });
});

let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.querySelector("#myPics");
const context = myPics.getContext("2d");

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

myPics.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

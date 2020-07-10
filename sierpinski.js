let value = -1;

window.onload = function() {

  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let width = canvas.width;
  let height = canvas.height;

  context.translate(width / 2, height / 2);

  window.requestAnimationFrame(check);

}

function check() {

  let currentValue = Math.floor(document.getElementById('slider').value / 125);

  if (currentValue != value) {

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    let p0 = {x: 0, y: -321};
    let p1 = {x: 278, y: 160};
    let p2 = {x: -278, y: 160};

    sierpinski(p0, p1, p2, currentValue);

    value = currentValue;

  }
  window.requestAnimationFrame(check);
}

function sierpinski(p0, p1, p2, limit) {

  if (limit > 0) {

    let pA = {x: (p0.x + p2.x) / 2, y: (p0.y + p2.y) / 2};
    let pB = {x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2};
    let pC = {x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2};

    sierpinski(p0, pA, pB, limit - 1);
    sierpinski(pA, p2, pC, limit - 1);
    sierpinski(pB, pC, p1, limit - 1);

  } else {
    drawTriangle(p0, p1, p2);
  }

}

function drawTriangle(p0, p1, p2) {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  context.fillStyle = 'black';
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.fill();
}

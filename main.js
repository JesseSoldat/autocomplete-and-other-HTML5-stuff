window.onload = draw;

function draw () {
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgba(0,200,0,1)";
  ctx.fillRect(36,10,22,12);
}
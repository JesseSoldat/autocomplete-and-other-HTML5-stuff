// window.onload = draw1;
//------------------------------------
//CANVAS 1
function draw1 () {
  
  var canvas1 = document.getElementById('canvas1');
  var ctx = canvas1.getContext('2d');
  ctx.fillStyle = "rgba(0,200,0,1)";
  //X, Y, width, height
  ctx.fillRect(36,110,222,112);

  ctx.fillStyle = "rgba(220,0,0,1)";
  ctx.fillRect(6,10,70,90);
}
//------------------------------------
  //CANVAS 2
function draw2(x, y) {
  var canvas2 = document.getElementById('canvas2');
  var ctx2 = canvas2.getContext('2d');
  ctx2.save();
  ctx2.clearRect(0,0,550,400); //x,y,width,height
  ctx2.fillStyle = "rgba(0,0,200,1)";
  ctx2.fillRect(x,y,50,50);
  ctx2.restore();
  x += 1;
  y += 1;
  var loopTimer = setTimeout('draw2('+x+','+y+')', 10);
  if (x === 500 || y === 350) {
    clearTimeout(loopTimer);
  }
}
function draw3(w, h) {
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  ctx3.clearRect(0,0,550,400);
  ctx3.fillStyle = "rgba(255,0,0,1)";
  ctx3.fillRect(100,50,w,h);
  w += 1;
  h += 1.5;
  var loopTimer2 = setTimeout('draw3('+w+','+h+')');
  if (w === 250 || h === 300) {
    clearTimeout(loopTimer2);
  };
}
function draw4() {
  var canvas4 = document.getElementById('canvas4');
  var ctx4 = canvas4.getContext('2d');
  ctx4.clearRect(0,0,400,300);
  ctx4.beginPath();
  ctx4.moveTo(100,50);
  ctx4.lineTo(130,100);
  ctx4.lineTo(70,100);
  ctx4.fillStyle = 'rgba(200,200,0,1)';
  ctx4.fill();

  ctx4.beginPath();
  ctx4.moveTo(100,200);
  ctx4.lineTo(200,200);
  ctx4.lineTo(200,250);
  ctx4.lineTo(100,250);
  ctx4.fillStyle = 'rgba(0,200,200,1)';
  ctx4.fill();




  


}
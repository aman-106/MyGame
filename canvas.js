var canvas = document.getElementById("canvas");

function draw() {
if (canvas.getContext) {
   var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);
  ctx.moveTo(55,55);
  ctx.arc(45,55, 10, 0, Math.PI*2, false);
  ctx.moveTo(105,55);
  ctx.arc(95,55,10,0, Math.PI*2, false);
  ctx.stroke();

}
}

canvas.addEventListener("click",getCursorPost);

var xpost=0,ypost=0;
function getCursorPost(event)
{
 xpost=event.clientX;
 ypost=event.clientY;
 console.log("post",event.clientX,event.clientY);
}

function rectAbove()
{
if (canvas.getContext)
{
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(00, 0, 450, 10)
}
}

var hit=0;
function ballon(dx,dy,display)
{
if(canvas.getContext)
  {
    var ctx = canvas.getContext("2d");
    console.log("y:",450+dy-50);
    if((450+dy-50)>0)
      {
        hit=((xpost-200-dx)*(xpost-200-dx))+((ypost-450-dy)*(ypost-450-dy))-400;
        console.log("hit:",hit);
        if(hit<0)
          {
            ctx.clearRect(0, 10, canvas.width, canvas.height);
            clearInterval(interval);
            alert("hit");
          }
          else
          {
            ctx.beginPath();
            ctx.arc(200+dx, 450+dy, 20, 0, Math.PI * 2, true);
            //      ctx.stroke();
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            console.log("call");
          }

      }
    else{
      clearInterval(interval);
    }

  }
}

function go(i)
{
 var dx=0,dy=-10;

  setInterval(function()
  {
    ballon(dx,i*dy);

  },i*200);

}



var i=0;
var ctx = canvas.getContext("2d");

function moveUp()
{
 ctx.clearRect(0, 10, canvas.width, canvas.height);
 (function(){
   ballon(0,i*-2);
   i++;
 })();

 console.log("move up",i);

}


// function bounce()
// {
//   ctx.clearRect(0, 10, canvas.width, canvas.height);

// }

interval=setInterval(moveUp,200);



// var dx = 2;
// var dy = -2;
// var x = 200;
// var y = 400;
// function drag() {
//      var canvas = document.getElementById("canvas");
//      var ctx = canvas.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
//     x += dx;
//     y += dy;
// }
// setInterval(drag,2000);

// var i=0;
// while(i<20)
//   {
//     go(i);
//     i++;
//     console.log(i);
//   }

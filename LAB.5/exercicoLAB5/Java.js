let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//calcada
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,300,400,150);
ctx.closePath();

//sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(260,70,50,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(140,200,100,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(150, 50);   
ctx.lineTo(50, 250);   
ctx.lineTo(250, 250);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'skyblue';
ctx.fillRect(148,215,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'skyblue';
ctx.fillRect(200,215,30,30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(177,245,24,55);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(308,285,24,55);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(320,260,30,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(45,245,24,55);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(55,225,30,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(0,300,45,1*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,300,45,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,355,150,45);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(150,400,45,1.0*Math.PI,2.0*Math.PI);
ctx.fill();
ctx.closePath();
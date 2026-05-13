const canvas1 = document.getElementById("canvas1");
const mi = canvas1.getContext("2d");

mi.lineWidth = 1;

mi.fillStyle = "white";
mi.fillRect(0, 0, 300, 300);

mi.fillStyle = "black";
mi.font = "20px Arial";
mi.fillText("Canvas", 115, 50);

mi.fillStyle = "blue";
mi.fillRect(0, 0, 50, 50);

mi.fillStyle = "red";
mi.fillRect(250, 0, 50, 50);

mi.beginPath();
mi.moveTo(50, 50);
mi.lineTo(150, 150);
mi.strokeStyle = "blue";
mi.stroke();

mi.beginPath();
mi.moveTo(250, 50);
mi.lineTo(150, 150);
mi.strokeStyle = "red";
mi.stroke();

mi.beginPath();
mi.moveTo(0, 150);
mi.lineTo(300, 150);
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 150, 80, Math.PI, 0);
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 150, 60, Math.PI, 0);
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 115, 16, 0, Math.PI * 2);
mi.fillStyle = "#16d8ff";
mi.fill();
mi.strokeStyle = "blue";
mi.stroke();

mi.fillStyle = "#16e5e5";
mi.fillRect(0, 120, 30, 60);

mi.fillRect(270, 120, 30, 30);

mi.fillStyle = "red";
mi.fillRect(110, 150, 40, 40);

mi.beginPath();
mi.arc(70, 220, 16, 0, Math.PI * 2);
mi.fillStyle = "yellow";
mi.fill();
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(220, 220, 16, 0, Math.PI * 2);
mi.fillStyle = "yellow";
mi.fill();
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 300, 80, Math.PI, 1.5 * Math.PI);
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 300, 60, Math.PI, 1.5 * Math.PI);
mi.strokeStyle = "green";
mi.stroke();

mi.beginPath();
mi.arc(150, 300, 40, Math.PI, 2 * Math.PI);
mi.fillStyle = "#16d8e5";
mi.fill();

mi.fillStyle = "yellow";
mi.fillRect(0, 240, 30, 60);
mi.fillRect(30, 270, 30, 30);

mi.fillStyle = "black";
mi.fillRect(240, 270, 60, 30);
mi.fillRect(270, 240, 30, 30);

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

ctx2.fillStyle = "#87e5c1";
ctx2.fillRect(0, 0, 400, 400);

ctx2.beginPath();
ctx2.arc(300, 100, 50, 0, Math.PI * 2);
ctx2.fillStyle = "yellow";
ctx2.fill();

ctx2.fillStyle = "#8f8f8f";
ctx2.fillRect(0, 260, 400, 140);

ctx2.beginPath();
ctx2.moveTo(0, 280);
ctx2.lineTo(0, 400);
ctx2.lineTo(200, 400);
ctx2.quadraticCurveTo(200, 350, 150, 350);
ctx2.lineTo(50, 350);
ctx2.quadraticCurveTo(50, 280, 0, 280);
ctx2.fillStyle = "#4a84e8";
ctx2.fill();

ctx2.fillStyle = "saddlebrown";
ctx2.fillRect(150, 200, 100, 100);

ctx2.beginPath();
ctx2.moveTo(150, 200);
ctx2.lineTo(200, 150);
ctx2.lineTo(250, 200);
ctx2.closePath();
ctx2.fillStyle = "tomato";
ctx2.fill();

ctx2.fillStyle = "#4db8ff";
ctx2.fillRect(160, 220, 30, 30);

ctx2.fillRect(210, 220, 30, 30);

ctx2.fillStyle = "#7a4a1d";
ctx2.fillRect(190, 230, 20, 70);

ctx2.fillStyle = "saddlebrown";
ctx2.fillRect(50, 250, 20, 80);

ctx2.beginPath();
ctx2.arc(60, 230, 30, 0, Math.PI * 2);
ctx2.fillStyle = "forestgreen";
ctx2.fill();

ctx2.fillStyle = "saddlebrown";
ctx2.fillRect(350, 290, 20, 70);

ctx2.beginPath();
ctx2.arc(360, 280, 30, 0, Math.PI * 2);
ctx2.fillStyle = "forestgreen";
ctx2.fill();
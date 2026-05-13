const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "https://cdn-icons-png.flaticon.com/512/616/616408.png";

let x = canvas.width / 2;
let y = canvas.height / 2;

const size = 60;

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let drawX = x - size / 2;
    let drawY = y - size / 2;

    if (drawX < 0) drawX = 0;
    if (drawY < 0) drawY = 0;

    if (drawX + size > canvas.width) {
        drawX = canvas.width - size;
    }

    if (drawY + size > canvas.height) {
        drawY = canvas.height - size;
    }

    ctx.drawImage(img, drawX, drawY, size, size);

    requestAnimationFrame(desenhar);
}

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();

    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
});

img.onload = () => {
    desenhar();
};
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let retangulo = {
    x: 50,
    y: 50,
    altura: 50,
    largura: 50,
    cor: "blue",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}


var circulo = {
    x: 0,
    y: 0,
    raio: 50,
    cor: "red",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

let direction = 1;

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function () {
        this.img.src = '115-1151070_ball-coloring-page-desenho-para-colorir-bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
}


function animacao() {
    ctx.clearRect(0, 0, 400, 400)
    if (retangulo.x == 350) {
        direction = - 1;
    }
    if (retangulo.x == 0) {
        direction = 1;
    }



    retangulo.x = retangulo.x + direction;
    retangulo.desenha();
    circulo.desenha();
    bola.desenha();

    requestAnimationFrame(animacao)
}
animacao();



document.addEventListener('keydown', function (evento) {
    tecla = evento.key;
    console.log(tecla);
    if (tecla == 'ArrowUp') { circulo.y = circulo.y - 1 }
    if (tecla == 'ArrowDown') { circulo.y = circulo.y + 1 }
    if (tecla == 'ArrowLeft') { circulo.x = circulo.x - 1 }
    if (tecla == 'ArrowRight') { circulo.x = circulo.x + 1 }
})



document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();

    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    if (x_mouse > 0 + bola.raio && x_mouse < 400 - bola.raio &&
        y_mouse > 0 + bola.raio && y_mouse < 400 - bola.raio) {
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else {
        bola.x = bola.x
        bola.y = bola.y
    }
})








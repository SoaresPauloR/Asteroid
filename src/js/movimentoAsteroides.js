let asteroidPequenoImage = new Image();
let asteroidGrandeImage = new Image();
asteroidPequenoImage.src = "./src/img/asteroide_pequeno.png";
asteroidGrandeImage.src = "./src/img/asteroide_grande.png";
let level = 1;

const canvas = document.getElementById("minha-tela");

const asteroids = [];
const velocidadeX = 0.5;
const velocidadeY = 0.5;

function criaAsteroide(escala) {
  let lado = Math.floor(Math.random() * 4);
  let x, y, image, raio;

  if (escala === "grande") {
    raio = 40;
    image = asteroidGrandeImage;
  } else {
    raio = 20;
    image = asteroidPequenoImage;
  }

  switch (lado) {
    case 0:
      x = Math.random() * canvas.width;
      y = -15 - raio;
      break;
    case 1:
      x = canvas.width + 15;
      y = Math.random() * canvas.height;
      break;
    case 2:
      x = Math.random() * canvas.width;
      y = canvas.height + 15;
      break;
    case 3:
      x = -15 - raio;
      y = Math.random() * canvas.height;
      break;
  }

  asteroids.push({ x: x, y: y, raio: raio, image: image });
}

// Ver com o Matheus e Vitor
setTimeout(function () {
  criaAsteroide("pequeno");
}, 2000);

setInterval(function () {
  criaAsteroide("pequeno");
}, 5000);

setInterval(function () {
  criaAsteroide("grande");
}, 10000);
// Fim

setInterval(function () {
  level++;
}, 30000);

function moveAsteroides({ ctx }) {
  for (let i = 0; i < asteroids.length; i++) {
    let asteroide = asteroids[i];

    asteroide.x += velocidadeX;
    asteroide.y += velocidadeY;

    if (asteroide.x <= -asteroide.raio) {
      asteroide.x = canvas.width + 15;
    } else if (asteroide.x >= canvas.width + 15) {
      asteroide.x = -asteroide.raio;
    }
    if (asteroide.y <= -asteroide.raio) {
      asteroide.y = canvas.height + 15;
    } else if (asteroide.y >= canvas.height + 15) {
      asteroide.y = -asteroide.raio;
    }

    ctx.drawImage(
      asteroide.image,
      asteroide.x,
      asteroide.y,
      asteroide.raio,
      asteroide.raio
    );

    // Debugger cria o Hitbox dos asteroides
    // ctx.strokeStyle = "red";
    // ctx.beginPath();
    // ctx.arc(
    //   asteroide.x + asteroide.raio / 2,
    //   asteroide.y + asteroide.raio / 2,
    //   asteroide.raio / 2,
    //   0,
    //   Math.PI * 2
    // );
    ctx.stroke();
  }

  // Desenha o nivel na tela
  ctx.fillText("LEVEL: " + level, 20, canvas.height - 10);
}

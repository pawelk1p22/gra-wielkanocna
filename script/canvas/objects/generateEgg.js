const eggPaths = [
  "egg1.png",
  "egg2.png",
  "egg3.png",
  "egg4.png",
  "egg5.png",
  "egg6.png",
  "egg7.png",
  "egg8.png",
  "egg9.png",
];

const eggsTxt = [];

eggPaths.forEach((path) => {
  const img = new Image();
  img.src = `/assets/${path}`;

  eggsTxt.push(img);
});

function generateEgg() {
  if (!paused) {
    const randomTextureIndex = Math.floor(Math.random() * eggPaths.length);
    const texture = eggsTxt[randomTextureIndex];

    const egg = {
      // pozycja startowa
      x: Math.random() * (c.width - 50),
      y: 0,
      width: 41, // szerokosc
      height: 46, // wysokosc
      texture: texture,
      update: function () {
        this.y += eggSpeed;
        if (
          this.x < bunny.x + bunny.width &&
          this.x + this.width > bunny.x &&
          this.y < bunny.y + bunny.height &&
          this.y + this.height > bunny.y
        ) {
          const index = eggs.indexOf(this);
          eggs.splice(index, 1);

          eggCollectAudio.play();

          ++score;
        }
      },
      // rysowanie jajka
      draw: function () {
        ctx.drawImage(this.texture, this.x, this.y, this.width, this.height);
      },
    };
    eggs.push(egg);
    egg.speed = 1;
  }
}

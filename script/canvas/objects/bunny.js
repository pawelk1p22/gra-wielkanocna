bunny = {
  // pozycja startowa
  x: c.width / 2 - 100,
  y: c.height - 130,
  width: 52, // szerokosc
  height: 103, // wysokosc
  update: () => {
    if (keyPresses["ArrowLeft"] && bunny.x > 0) {
      bunny.x -= bunnySpeed;
      console.log(bunnySpeed);
    }
    if (keyPresses["ArrowRight"] && bunny.x < c.width - bunny.width) {
      bunny.x += bunnySpeed;
    }
  },
  // rysowanie krolika
  draw: () => {
    ctx.drawImage(bunnyImg, bunny.x, bunny.y, bunny.width, bunny.height);
  },
};

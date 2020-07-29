"use strict";

(() => {
  const canvas = document.querySelector(".content__canvas");
  const context = canvas.getContext("2d");
  let boxes = [];
  let x = 0;
  function setLayout() {
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
  }

  window.addEventListener("resize", () => {
    setLayout();
  });

  class Box {
    constructor(x, y, width, height, speed, index) {
      this.x = x;
      this.y = y;
      this.index = index;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.red = 0;
      this.blue = 0;
      this.green = 0;
      this.draw();
    }
    draw() {
      context.fillStyle = `rgba(${this.red},${this.blue},${this.green},0.5)`;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  let bx, by, bw, bh, speed;
  function createBox(count) {
    for (let i = 0; count > i; i++) {
      bx = Math.random() * canvas.width * 0.9;
      by = Math.random() * canvas.height * 0.9;
      bw = Math.random() * 100 + 100;
      bh = Math.random() * 100 + 100;
      if (i % 2 == 0) {
        speed = Math.random() * 10 + 1;
      } else {
        speed = Math.random() * -10 + 1;
      }
      boxes.push(new Box(bx, by, bw, bh, speed, i));
    }
  }

  function rander() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let box;
    for (let i = 0; boxes.length > i; i++) {
      box = boxes[i];
      // box.red = Math.random() * 100;
      // box.blue = Math.random() * 100;
      // box.green = Math.random() * 100;
      box.x += box.speed;
      box.y += box.speed;
      if (box.speed < 0) {
        box.red += -box.speed;
        box.blue += -box.speed - 0.2;

        if (box.red >= 255) box.red = 0;
        if (box.blue >= 255) box.blue = 0;
        if (box.x < 0 - box.width) box.x = canvas.width;
        if (box.y < 0 - box.height) box.y = canvas.height;
      } else {
        if (canvas.width < box.x) box.x = 0 - box.width;
        if (canvas.height < box.y) box.y = 0 - box.height;
      }

      box.draw();
    }
    requestAnimationFrame(rander);
  }
  setLayout();

  createBox(150);
  rander();
  // draw();
})();

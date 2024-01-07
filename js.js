const block = document.getElementById("main");
const getWidth = window.innerWidth - 150;
const getHedht = window.innerHeight - 150;
const rndColor = () => Math.round(Math.random() * 255);
setInterval(() => {
  block.style.backgroundColor = `rgb(${rndColor()}, ${rndColor()}, ${rndColor()})`;
}, 1000);
setInterval(() => {
  const randomTop = Math.random() * getHedht;
  const randomLeft = Math.random() * getWidth;
  block.style.top = `${randomTop}px`;
  block.style.left = `${randomLeft}px`;
}, 1000);

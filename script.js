'use strict';

const button = document.querySelector('.change-color');
const background = document.querySelector('main');
const span = document.querySelector('.color span');

const flipper = () => {
  let currentColor;

  const generateRandomColor = () => {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    const generatedColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    return generatedColor;
  };

  const flipBackgroundColor = () => {
    currentColor = generateRandomColor();
    background.style.backgroundColor = currentColor;
  };

  const updateColorText = () => {
    span.textContent = `${currentColor};`;
    span.style.color = currentColor;
  };

  const colorFlipper = () => {
    flipBackgroundColor();
    updateColorText();
  };

  return colorFlipper;
};
const colorFlipper = flipper();

button.addEventListener('click', colorFlipper);
window.onload = colorFlipper;

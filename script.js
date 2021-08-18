'use strict';

const btn = document.querySelector('.change-color');
const bgc = document.querySelector('main');
const span = document.querySelector('.color span');

const flipper = function () {
  let currColor;

  const generateRandomColor = function () {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    const generatedColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    return generatedColor;
  };

  const flipBackgroundColor = function () {
    currColor = generateRandomColor();
    bgc.style.backgroundColor = currColor;
  };

  const updateColorText = function () {
    span.textContent = `${currColor};`;
    span.style.color = currColor;
  };

  const colorFlipper = function () {
    flipBackgroundColor();
    updateColorText();
  };

  return colorFlipper;
};

const colorFlipper = flipper();

btn.addEventListener('click', colorFlipper);

window.onload = colorFlipper;

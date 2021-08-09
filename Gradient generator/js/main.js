let body = document.getElementById('gradient');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
console.log(gradient);


function Gradient() {
  // body.style.background = `linear-gradient(to right,+${color1.value},${color2.value})`;
  body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}
color1.addEventListener('input', Gradient);
color2.addEventListener('input', Gradient);

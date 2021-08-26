function randomColor() {
  var color = '#' + Math.random().toString(16).substr(2, 6);
  document.getElementById("button").style.backgroundColor = color;

  document.getElementById("button").innerHTML = color;
  console.log(color);
}
// 2.1, 2.2, 2.3
const pintar = function(event, color = 'green') {
  event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function(event) {
  pintar(event, 'yellow');
});

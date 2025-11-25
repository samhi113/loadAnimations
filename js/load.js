const left = document.getElementById("left");
const right = document.getElementById("right");
const text = document.querySelector("h2");
const gif = document.getElementById("loading");

window.onload = async function() {
  await delay(2500);

  gif.style.opacity = 1;

  var waitTime = (Math.random() * 3000) + 4500;
  console.log(waitTime);
  await delay(waitTime);

  left.setAttribute("src", "img/WDDACenter.svg");
  right.setAttribute("src", "img/WDDACenter.svg");

  left.style.width = "10vw";
  right.style.width = "10vw";

  left.style.clipPath = "polygon(100% 0%, 0 50%, 0 50%, 100% 100%);"
  right.style.clipPath = "polygon(100% 50%, 0 0, 0 100%, 100% 50%);"

  text.style.display = "none";
  gif.style.display = "none";

  waitTime = (Math.random() * 1000) + 2000;
  console.log(waitTime);
  await delay(waitTime);

  document.querySelector("body").style.backgroundColor = "#ddd";
  await delay(2001);

  document.location.href = "page1.html";
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
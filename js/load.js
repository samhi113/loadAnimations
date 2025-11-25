window.onload = async function() {
  delay(2500);
  document.getElementById("loading").style.opacity = 1;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
const menuLinks = document.querySelectorAll("nav button");
const fader = document.getElementById("fadeOpener");

window.onload = function() {

  fader.checked = true;

  for (let i = 0; i < menuLinks.length; i++) {
    const element = menuLinks[i];
    
    element.addEventListener("click", function(){changePage(i+1)});
  }
}


async function changePage(pageNum) {
    fader.checked = false;

    var location = pageNum;
    location = "page" + location.toString() + ".html";
    console.log("Changing Page to", location);

    await delay(1500);

    document.location.href = location;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

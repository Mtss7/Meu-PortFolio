const showLinksButton = document.getElementById("showLinksButton");
const linksContainer = document.getElementById("linksContainer");

let linksVisible = false;

showLinksButton.addEventListener("click", () => {

  if (linksVisible) {
    linksContainer.style.display = "none";
  } else {
    linksContainer.style.display = "flex";
  } 
  linksVisible = !linksVisible;
});






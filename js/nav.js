const menu = document.getElementById("menu");

menu.style.maxHeight = "0px";

function menuToggle() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "200px";
  } else {
    menu.style.maxHeight = "0px";
  }
}

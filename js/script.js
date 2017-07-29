function toggleMenu() {
  var menu = document.getElementById('menu');
  
  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "inline";
  }
  else {
    menu.style.display = "none";
  }
}

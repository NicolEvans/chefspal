var menuName = document.getElementsByClassName('main-nav');

function currentMenu() {
  var i;
  for (i = 0; i < menuName.length; i++) {
    var link = menuName[i].getAttribute('href');
  if (link == window.location.href) {
    menuName[i].classList.add('current');
    }
  }
}

window.onload = function() {
  currentMenu();
}

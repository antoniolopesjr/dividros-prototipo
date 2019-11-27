function scrollBanner() {
  scrollPos = window.scrollY;
  /*var headerText = document.querySelector('.bgimg-1 span')*/
  headerText.style.marginTop = -(scrollPos/6)+"px";
  headerText.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scrollBanner);
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
/*function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/

function topFunction() {
  var currentY = window.scrollY;
  var int = setInterval(function () {
    window.scrollTo(0, currentY);

    if (currentY > 600) {
      currentY -= 70;
    } else if (currentY > 100) {
      currentY -= 50;
    } else {
      currentY -= 10;
    }

    if (currentY <= 0) clearInterval(int);
  }, 1000 / 150); // 60fps
}

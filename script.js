window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    document.getElementById("navbar").style.background = "#132538";
    document.getElementById("more").style.background = "#132538";
  } else {

    document.getElementById("navbar").style.background = "none";
    document.getElementById("more").style.background = "none";
  }

}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.fontSize = "18px";
    document.getElementById("logo").style.maxHeight = "6vh";
    document.getElementById("header").style.fontWeight = "180";
    document.getElementById("header").classList.add("w3-white");
    document.getElementById("header-mobile").classList.add("w3-white");
    document.getElementById("header").classList.add("w3-card");
    document.getElementById("header-mobile").classList.add("w3-card");
    
  } else {
    document.getElementById("header").style.fontSize = "22px";
    document.getElementById("logo").style.maxHeight = "7vh";
    document.getElementById("header").style.fontWeight = "350";
    document.getElementById("header").classList.remove("w3-white");
    document.getElementById("header-mobile").classList.remove("w3-white");
    document.getElementById("header").classList.remove("w3-card");
    document.getElementById("header-mobile").classList.remove("w3-card");
  }
}
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

var modal = document.getElementsByClassName('w3-modal');
var i=0;
window.onclick = function(event) {
  for(i=0; i<modal.length; i++){
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}

function openImg(imgName) {
  var i, x;
  x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(imgName).style.display = "block";
}
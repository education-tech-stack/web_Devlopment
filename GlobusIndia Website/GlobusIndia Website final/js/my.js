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
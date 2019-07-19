function openNav() {
    
    let navClass = document.getElementById("vertical-nav").classList;
    navClass.remove("d-none");
    navClass.remove("d-lg-block");
    navClass.add("d-lg-none");
    document.getElementById('logo').innerHTML = 'LOGO<i class = "fas fa-times mx-2" style="font-size:15px;float:right;" onclick = "closeNav()"></i>';
    document.getElementById('body').style.filter = 'contrast(50%)';
    document.getElementById('topNav').style.filter = 'contrast(50%)';
}
function closeNav() {
    
    let navClass = document.getElementById("vertical-nav").classList;
    navClass.add("d-none");
    navClass.add("d-lg-block");
    navClass.remove("d-lg-none");
    document.getElementById('logo').innerHTML = 'LOGO';
    document.getElementById('body').style.filter = 'contrast(100%)';
    document.getElementById('topNav').style.filter = 'contrast(100%)';
}

let buyNow = document.getElementById('buy-now');
let buyImg = document.getElementById('div-buy');

buyImg.onmouseover = function(){
    buyNow.style.display = 'block';
};
buyImg.onmouseout = function(){
    buyNow.style.display = 'none';
};

function resizeFun(x) {
    if (x.matches) { // If media query matches
        closeNav()
  }
}
  var x = window.matchMedia("(min-width: 770px)")
  resizeFun(x) // Call listener function at run time
  x.addListener(resizeFun) // Attach listener function on state changes
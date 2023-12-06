$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1); 
    }, 0); 
    return false;
});

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px"; 
  prevScrollPos = currentScrollPos;
}
}


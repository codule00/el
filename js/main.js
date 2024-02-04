window.addEventListener("load" , ()=>{
  const loader = document.querySelector(".loader");
  
  setTimeout(() => {
    loader.style.display ="none"
  }, 2000);
})

document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(function(link) {
      link.href = link.href.replace(".html", "");
  });
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
});
let bar = document.getElementById("bar"),
    menu = document.getElementById("menu"),
    close = document.getElementById("span");

bar.addEventListener("click", () => {
  menu.style.display = "flex";
  bar.style.display = " none";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
  bar.style.display = "inline";
});


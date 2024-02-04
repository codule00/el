window.addEventListener("load" , ()=>{
  const loader = document.querySelector(".loader");
  
  setTimeout(() => {
    loader.style.display ="none"
  }, 2000);
})

function dl() {
  let dlBox = document.getElementsByClassName("dn"),
      screenWidth = window.innerWidth
      if (screenWidth < 500) {
        dlBox[0].remove()
        dlBox[1].remove()
        dlBox[2].remove()
      }
}


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


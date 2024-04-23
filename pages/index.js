var a = function () {
  console.log("hello Askalan");
};

a();
console.log("Hello!");
console.log("Askalan needs money");

//Set Current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentyear);
yearEl.text.Content = currentYear;

////////////////////////////////////////////////////
///Smooth scrolling animation

const alllinks = document.querySelectorAll("a:links");

alllinks.forEach(fucntion (link) {
  link.addEventlistener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
    window.scrollTo({
  top:0,
  behavior: "smooth",
});

if (href !== "#" && href.startswith("#") {
  const sectionEl = document.querySeclector(href);
  sectionEl.scrollIntoview({ behavior: "smooth"});
}
});
});



/* 
document.querySelector("button").onclik = saythanks; */
function nicknameFunction() {
  if (document.getElementById("yesNick").checked) {
    document.getElementById("nick").style.display = "inline";
    document.getElementById("nickname").setAttribute("required", true);
  } else {
    document.getElementById("nickname").removeAttribute("required");
    document.getElementById("nick").style.display = "none";
  }
}

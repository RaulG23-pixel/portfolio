
/*Modules*/

/*Mobile navigation*/
/*===============================*/
const navToggle = document.querySelector("#nav-toggle"),
  navMenu = document.querySelector("#nav-menu"),
  navClose = document.querySelector("#close"),
  navLink = document.querySelectorAll(".nav__link");

if (navToggle)
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");

    navLink.forEach((n) => n.addEventListener("click", hideMenu));
  });
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navLink.forEach((n) => n.removeEventListener("click", hideMenu));
  });
}

function hideMenu() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show");
}

/*Remove the menu mobile */
const toggleSkillScroll = document.querySelector("#skills__container");
const buttonToggleSkill = document.querySelector("#show__skills");

function animateScrollingDown() {
  const myInterval = setInterval(() => {
    toggleSkillScroll.scrollTop += 10;
  }, 10);
  setTimeout(() => {
    clearInterval(myInterval);
  }, 412);
}
function animateScrollingUp() {
  const myInterval = setInterval(() => {
    toggleSkillScroll.scrollTop -= 10;
  }, 10);
  setTimeout(() => {
    clearInterval(myInterval);
  }, 570);
}

buttonToggleSkill.addEventListener("click", (e) => {
  if (toggleSkillScroll.classList.contains("skill__static")) {
    toggleSkillScroll.classList.remove("skill__static");
    toggleSkillScroll.classList.add("skill__scroll");
    buttonToggleSkill.innerHTML =
      '<div>Show less <i class="uil uil-arrow-up"></i></div>';
    animateScrollingDown();
  } else {
    toggleSkillScroll.classList.add("skill__static");
    toggleSkillScroll.classList.remove("skill__scroll");
    animateScrollingUp();
    buttonToggleSkill.innerHTML =
      "<div>Show more <i class='uil uil-arrow-down'></i></div>";
  }
});


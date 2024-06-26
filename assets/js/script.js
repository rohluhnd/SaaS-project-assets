const nav = document.getElementById("topNav");

window.onscroll = function () {
  if (window.scrollY > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = navButton.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);

  const headerNav = document.getElementById("topNav");
  if (!headerNav.classList.contains("sticky")) {
    headerNav.classList.add("sticky");
  } else if (headerNav.classList.contains("sticky") && window.scrollY < 100) {
    headerNav.classList.remove("sticky");
  }
}

navButton.addEventListener("click", toggleNav);

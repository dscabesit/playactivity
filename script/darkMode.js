const togglbtn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");

togglbtn.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    togglbtn.innerHTML = "Lights off";
  } else {
    body.classList.add("dark");
    togglbtn.innerHTML = "Lights on";
  }
});

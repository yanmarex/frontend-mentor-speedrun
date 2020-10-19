//First button
const shareBtn = document.getElementById("share");
const popup = document.getElementById("popup");
shareBtn.addEventListener("click", () => {
  popup.classList.toggle("is-visible");
});
//Second button
const shareBtnSecond = document.getElementById("second-popup");
shareBtnSecond.addEventListener("click", () => {
  popup.classList.toggle("is-visible");
});

var btns = document.querySelectorAll(".copy");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseleave", clearTooltip);
  btns[i].addEventListener("blur", clearTooltip);
}
function clearTooltip(e) {
  e.currentTarget.setAttribute("class", "copy");
  e.currentTarget.removeAttribute("aria-label");
}
function showTooltip(elem, msg) {
  elem.setAttribute("class", "tooltipped copy");
  elem.setAttribute("aria-label", msg);
}

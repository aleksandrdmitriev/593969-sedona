var link = document.querySelector(".modal-close-open");
var popup = document.querySelector(".modal-find");
var arrival = popup.querySelector("[name=arrival]");

  popup.classList.add("modal-hide");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
  arrival.focus();
});

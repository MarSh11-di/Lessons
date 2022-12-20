"use strict"
const forms = document.querySelector(".forma");
document.addEventListener("click", formAct);
function formAct(event) {
   if (event.target.closest(".forma__serch")) {
      forms.classList.toggle("_activ");
   }
   if (!event.target.closest(".forma")) {
      forms.classList.remove("_activ");
   }
}
document.addEventListener("keyup", function (event) {
   if (event.code === "Escape") {
      forms.classList.remove("_activ");
   }
});
const txt = document.querySelector(".forma__input");
const txtLim = txt.getAttribute("maxlength");
const txtCount = document.querySelector(".forma__limit span");
txtCount.innerHTML = txtLim;
txt.addEventListener("keyup", txtFun);
txt.addEventListener("keydown", function (event) {
   if (event.repeat) txtFun();
});

function txtFun() {
   const txtRes = txtLim - txt.value.length;
   txtCount.innerHTML = txtRes;
}
// OUVERTURE DU POPUP
const watch = () => {
  let trailer = document.querySelector(".trailer");
  let watchBtn = document.querySelector(".watch");
  let video = document.querySelector("iframe");
  watchBtn.addEventListener("click", () => {
    trailer.classList.toggle("active");
  });
};
// FERMETURE DU POPUP
const closeTrailer = () => {
  let trailer = document.querySelector(".trailer");
  let closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    trailer.classList.toggle("active");
  });
};

// APPEL DES FONCTIONS DANS UNE SEUL
const app = () => {
  watch();
  closeTrailer();
};

// EXECUTE NOS FONCTIONS
app();

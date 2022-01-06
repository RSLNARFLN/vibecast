// OUVERTURE DU POPUP Youtube
const watch = () => {
  let trailer = document.querySelector(".trailer");
  let watchBtn = document.querySelector(".watch");
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

// OUVERTURE POPUP(Modal) GET STARTED
const modal = () => {
  let modal = document.querySelector(".modal");
  let getStartedBtn = document.querySelector(".started-btn");
  getStartedBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
  });
};
// FERMETURE DU MODAL
const closeModal = () => {
  let modal = document.querySelector(".modal");
  let closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.toggle("active");
  });
};
// APPEL DES FONCTIONS DANS UNE SEUL
const app = () => {
  watch();
  closeTrailer();
  modal();
  closeModal();
};

// EXECUTE NOS FONCTIONS
app();

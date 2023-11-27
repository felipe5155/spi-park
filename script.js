

//Movimento de scrool de acordo com pixel da pagina

const home = document.querySelector('#home')

home.addEventListener('click', () => {
    // window.scroll({top: window.innerHeight, behavior: "smooth"})
    window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
});
const sobre = document.querySelector('#sobre')

sobre.addEventListener('click', () => {
    window.scroll({
        top: 1000,
        left: 1000,
        behavior: "smooth",
      });
});
contato.addEventListener('click', () => {
    window.scroll({
        top: 2000,
        left: 2000,
        behavior: "smooth",
      });
});

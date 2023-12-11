
console.log("Hello World");
//Movimento de scrool de acordo com pixel da pagina

const home = document.querySelector('#home')

home.addEventListener('click', () => {
    // window.scroll({top: window.innerHeight, behavior: "smooth"})
    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
});
const sobre = document.querySelector('#sobre')

sobre.addEventListener('click', () => {
    window.scroll({
        top: 400,
        left: 1000,
        behavior: "smooth",
      });
});
const mapa = document.querySelector('#mapa')

mapa.addEventListener('click', () => {
    window.scroll({
        top: 950,
        left: 3000,
        behavior: "smooth",
      });
});
const contato = document.querySelector('#contato')

contato.addEventListener('click', () => {
    window.scroll({
        top: 3000,
        left: 3000,
        behavior: "smooth",
      });
});


//Transição do carrossel do Slide da pagina
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
},4000)

function nextImage(){
    count++;
    if(count>3){
        count =1;
    }
    document.getElementById("radio"+count).checked = true;
}



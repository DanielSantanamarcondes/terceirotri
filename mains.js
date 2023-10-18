alert('Ola Mundo');
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}



        const listaDeTeclas = document.querySelectorA11('.tecla');

      let contador = 0;
       
        while(contador <listaDeTeclas.length) {
        const tecla = listaDeTeclas[contador];
            const instrumento = tecla.classLista[1];
            const idAudio = '#som_ $(instrumento)';
           console.log(idAudio);
           tecla.onclick = function (){
                tocaSom(idAudio);
            };
            contador = contador + 1;
        }
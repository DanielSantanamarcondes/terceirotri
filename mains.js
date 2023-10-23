alert('Ola Mundo');
function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}



        const listaDeTeclas = document.querySelectorA11('.tecla');

      
       
        for(let contador = 0;contador < listaDeTeclas.length;contador++) {
            const tecla = listaDeTeclas[contador];
            const instrumento = tecla.classLista[1];
            const idAudio = `#som_ ${instrumento}`;
            console.log(idAudio);

            tecla.onclick = function (){
               tocaSom(idAudio);  
        }
            tecla.onkeydown = fuction(){
              
            }
      }

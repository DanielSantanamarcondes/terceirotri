function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}



        const listaDeTeclas = document.querySelectorA11('.tecla');

      
       
        for(let contador = 0;contador < listaDeTeclas.length;contador++) {
            const tecla = listaDeTeclas[contador];
            const instrumento = tecla.classLista[1];
            const idAudio = `#som_ ${instrumento}`;
            console.log(idAudio);
            console.log(instrumento)

            tecla.onclick = function (){
               tocaSom(idAudio);  

        }
            tecla.onkeydown = function() {
             tecla.classlist.add('ativa'); 
            }
            tecla.onkeydown = function(){
                tecla.classlist.remove('ativa');
            }
            console.log(contador)
      }

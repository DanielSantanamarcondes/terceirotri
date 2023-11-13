//a função que deve ser executada é tocaSom, mas que som? Nesse caso,seá o parâmetro idElementoAudio. Ou seja, o endereço da tecla será procurado no html e reproduzido.
function tocaSom(idElementoAudio){
  const elemento = document.querySelector(idElementoAudio);
  //se o elemento pesquisado for igual a "inexistente", o alerta de elemento não encontrado aparecerá.
  if(elemento === null) {
   alert('Elemento não encontrado');
  };
  //se o elemento existir, a função play daquele elemento acontecerá, ou seja, a tecla será reproduzida.
  if (elemento && elemento.localName === 'audio') {
   elemento.play();
  }else {
   alert('Elemento não encontrado');
  };
}
//querySelector encontra as informações da tecla pesquisa no documento
const listaDeTeclas = document.querySelectorAll('.tecla');
//Estrututa de repetição - Enquanto
//para que as teclas não sejam repssetidas da maneira infinita, criamos o for, com valor de inincio 0, e valor final chamado de contador < listaDeTeclas.length, para que a repetiçã seja exatamente do tamanho da nossa lista . que é de 9 teclas.
        for(let contador = 0; contador < listaDeTeclas.length;contador++) {
            const tecla = listaDeTeclas[contador];
            const instrumento = tecla.classList[1];
            const idAudio = `#som_${instrumento}`;
            console.log(idAudio);
         
            tecla.onclick = function(){
               tocaSom(idAudio);  
            };
            tecla.onkeydown = function (evento) {
               if(evento.code === 'Enter'|| evento.code === 'Space'){
               tecla.classList.add('ativa');
            }
        };
            tecla.onkeyup = function(){
                tecla.classList.remove('ativa');
            };
            console.log(instrumento);
         console.log(contador);
    
      }

    
    
   
     
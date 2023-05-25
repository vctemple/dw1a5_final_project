function abrirImagem(imagem) { 

    var esquerda = (screen.width - imagem.width)/2; 
    var topo = (screen.height - imagem.height)/2;
    minhaJanela = window.open(imagem.src,'','height=' + imagem.height + ', width=' + imagem.he + ', top=' + 
    topo + ', left=' + esquerda); 
  } 

  $(document).ready(function(){
    $('#phone').mask('(00) 00000-0000');
})

function abrirImagem(imagem) { 

    var esquerda = (screen.width - imagem.width)/2; 
    var topo = (screen.height - imagem.height)/2;
    minhaJanela = window.open(imagem.src,'','height=' + imagem.height + ', width=' + imagem.he + ', top=' + 
    topo + ', left=' + esquerda); 
  } 
//função carrosel
const controls = document.querySelectorAll(".control");//aqui estou selecionando as classes dos botões
let currentItem = 0;//aqui vai ser o meu controlador onde vou dizer se avanço ou retrocedo a img
const items = document.querySelectorAll(".item"); //aqui estou pegando todas as minhas imagens
const maxItems = items.length; // pegando o tamanho da imagem

controls.forEach((control) => { //o parametro da minha função é a classe dos botões que acionam
  control.addEventListener("click", (e) => {//configurar a função de click e ativar
    isLeft = e.target.classList.contains("arrow-left");//pega a class do botão no index 

    if (isLeft) {//se caso clicar vai pegar meu controlador currentItem vai decrementar
      currentItem -= 1;
    } else {
      currentItem += 1;
    }
//se caso chegar ao limites das imagem essa estrutura 0 o contador
    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));//remove a classe da primeira imagem
//organiza para ser retirado a classe da imagem no lugar certo
    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");//adiciona a imagem a classe current-item para a proxima imagem
  });//cada imagem recebe essa classe para dar destaque a proxima
});
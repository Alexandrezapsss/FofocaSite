//função carrosel
const controls = document.querySelectorAll(".control");//aqui estou selecionando as classes dos botões
let currentItem = 0;//aqui vai ser o meu controlador onde vou dizer se avanço ou retrocedo a img
const items = document.querySelectorAll(".item"); //aqui estou pegando todas as minhas imagens
const maxItems = items.length; // pegando o tamanho da imagem

controls.forEach((control) => { //o parametro da minha função é a classe dos botões que acionam
  control.addEventListener("click", (e) => {//configurar a função de click e ativar
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
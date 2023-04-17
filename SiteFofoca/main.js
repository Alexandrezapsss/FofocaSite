//Validar nome e sobrenome do usuário sem números somente letras
function validarNomeTelefone() {
  //pegar o id dos campos e armazenar em variaveis
  let nome = document.getElementById("nome").value;
  let sobre = document.getElementById("sobre").value;
  let telefone = document.getElementById("telefone").value;
  //fazer variavel que armazena a expressão regular para fazer a lógica
  let regexLetras = /^[a-zA-Z]+$/; // expressão regular para permitir somente letras e não números
  let regexNumeros = /^[0-9]+$/; //expressão regular para aceitar somente números
  //começar com as lógicas
  //verifica se os campos só contem letras e não números
  if (!regexLetras.test(nome) || !regexLetras.test(sobre)) {
    alert("Por favor, preencha o campo Sobrenome corretamente.");
    return false;
  }
  //verificar se o telefone só contem números e não letras
  else if (!regexNumeros.test(telefone)) {
    alert("Por favor, preencha o campo Telefone corretamente");
    return false;
  } else {
    //finalizar a função retornando true para informar ao navegador que está tudo certo
    return true;
  }

}//termino da função vaidarNomeTelefone
//incio de validar nome
function validarNome() {
  //variavel para armazenar i valor do id nome
  let nome = document.getElementById("nome").value;
  //variavel regex para seomente letras
  let regexLetras = /^[a-zA-Z]+$/;
  if (!regexLetras.test(nome)) {
    alert("Por favor, preencha o campo Nome corretamente.");
    return false;
  }
  return true;
}
//fim de validar nome na página de contato
//mensagem de confirmação de envio de formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const confirmacao = confirm('Tem certeza que deseja enviar esta mensagem?');
  if (!confirmacao) {
    event.preventDefault();
  } else {
    window.location.href = "index.html"; // Redirecione para a página inicial
  }
});
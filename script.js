const anoAtual = document.querySelector("#ano-atual");

anoAtual.textContent = new Date().getFullYear();


const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click",function () {
   const menuAberto = menuPrincipal.classList.toggle("menu-aberto");

   botaoMenu.setAttribute("aria-expanded", menuAberto);
   botaoMenu.textContent = menuAberto ? "Fechar menu" : "Menu";

});
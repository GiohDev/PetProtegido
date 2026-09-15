const anoAtual = document.querySelector("#ano-atual");

anoAtual.textContent = new Date().getFullYear();


const botaoMenu = document.querySelector(".botao-menu");
const menuPrincipal = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click",function () {
   const menuAberto = menuPrincipal.classList.toggle("menu-aberto");

   botaoMenu.setAttribute("aria-expanded", menuAberto);
   botaoMenu.textContent = menuAberto ? "Fechar menu" : "Menu";

})

const linksMenu = menuPrincipal.querySelectorAll("a");

linksMenu.forEach(function (link) {
   link.addEventListener("click", function () {
      menuPrincipal.classList.remove("menu-aberto");
      botaoMenu.setAttribute("aria-expanded", false);
      botaoMenu.textContent = "Menu";

   })
})

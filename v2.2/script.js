/* =========================
   TROCA DE PÁGINAS
========================= */

function mostrarPagina(id) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function (pagina) {

        pagina.classList.remove("ativa");

    });


    const paginaSelecionada = document.getElementById(id);


    if (paginaSelecionada) {

        paginaSelecionada.classList.add("ativa");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    fecharMenus();

}



/* =========================
   FECHAR MENUS
========================= */

/* =========================
   ABRIR APENAS UM MENU
========================= */

const menus = document.querySelectorAll(".menu > ul > li > details");

menus.forEach(function(menu) {

    menu.addEventListener("toggle", function() {

        if (menu.open) {

            menus.forEach(function(outroMenu) {

                if (outroMenu !== menu) {

                    outroMenu.removeAttribute("open");

                }

            });

        }

    });

});



/* =========================
   CARROSSEL
========================= */

let slideAtual = 0;


const slides = document.querySelector(".slides");

const imagens = document.querySelectorAll(".slides img");


function atualizarSlide() {

    if (!slides || imagens.length === 0) {

        return;

    }


    slides.style.transform =
        `translateX(-${slideAtual * 100}%)`;

}



function proximo() {

    if (imagens.length === 0) {

        return;

    }


    slideAtual++;


    if (slideAtual >= imagens.length) {

        slideAtual = 0;

    }


    atualizarSlide();

}



function anterior() {

    if (imagens.length === 0) {

        return;

    }


    slideAtual--;


    if (slideAtual < 0) {

        slideAtual = imagens.length - 1;

    }


    atualizarSlide();

}





/* =========================
   BOTÃO TROCA DE TEMA
========================= */
const botaoTema = document.getElementById("tema");


botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botaoTema.innerHTML = '';

    } else {

        botaoTema.innerHTML = '';

    }

});
/* =========================
   FECHAR MENU AO CLICAR FORA
========================= */

document.addEventListener("click", function (evento) {

    const menu = document.querySelector(".menu");

    if (!menu.contains(evento.target)) {

        const menusAbertos = menu.querySelectorAll("details[open]");

        menusAbertos.forEach(function (item) {
            item.removeAttribute("open");
        });

    }

});

 /*=========================================
            HEADER AO ROLAR
=========================================*/

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        } else {
            header.style.background = "rgba(255,255,255,.75)";
            header.style.boxShadow = "none";
        }
    });
}

/*=========================================
        BOTÃO VOLTAR AO TOPO
=========================================*/

const backTop = document.querySelector(".back-top");

if (backTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backTop.classList.add("show-top");
            backTop.style.pointerEvents = "auto";
        } else {
            backTop.classList.remove("show-top");
            backTop.style.pointerEvents = "none";
        }
    });
}

/*=========================================
            SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

/*=========================================
        ANIMAÇÃO AO ROLAR
=========================================*/

const revealElements = document.querySelectorAll(
'.product-card,.benefit-card,.gallery-item,.testimonial-card,.contact-info,.contact-map'
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        if (el.getBoundingClientRect().top < windowHeight - 120) {
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/*=========================================
        BARRA DE PROGRESSO
=========================================*/

const progress = document.querySelector(".progress-bar");

if (progress) {

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const porcentagem =
            (window.scrollY / total) * 100;

        progress.style.width = porcentagem + "%";

    });

}

/*=========================================
        MENU MOBILE
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}
/*=========================================
        WHATSAPP
=========================================*/

const phone = "5511977695185";

const message = encodeURIComponent(
"Olá! Vim pelo site e gostaria de fazer um pedido de açaí 😋🍇"
);

document.querySelectorAll(".btn-primary,.btn-header,.mobile-btn").forEach(btn=>{

    btn.href=`https://wa.me/${phone}?text=${message}`;
    btn.target="_blank";

});

/*=========================================
        PRODUTOS
=========================================*/

const produtos={

morango:{
nome:"Açaí com Morango",
imagem:"acai1.jpg",
preco:24.90,
descricao:"Açaí cremoso com morango."
},

pacoca:{
nome:"Açaí com Paçoca",
imagem:"acai2.jpg",
preco:31.90,
descricao:"Açaí com paçoca e leite em pó."
},

kinder:{
nome:"Açaí Kinder",
imagem:"acai3.jpg",
preco:34.90,
descricao:"Kinder Bueno, creme de ninho e coberturas."
},

barca:{
nome:"Barca de Açaí",
imagem:"acai4.jpg",
preco:59.90,
descricao:"Ideal para compartilhar."
}

};

/*=========================================
        ABRIR PRODUTO
=========================================*/

function abrirProduto(id){

localStorage.setItem("produtoSelecionado",id);

window.location.href="produto.html";

}

/*=========================================
        CARREGAR PRODUTO
=========================================*/

const produtoAtual=localStorage.getItem("produtoSelecionado");

if(document.getElementById("produtoNome")){

const produto=produtos[produtoAtual];

if(produto){

document.getElementById("produtoImagem").src=produto.imagem;

document.getElementById("produtoNome").innerHTML=produto.nome;

document.getElementById("produtoDescricao").innerHTML=produto.descricao;

document.getElementById("produtoPreco").innerHTML=
"R$ "+produto.preco.toFixed(2);

document.getElementById("total").innerHTML=
produto.preco.toFixed(2);

}

}

/*=========================================
        QUANTIDADE
=========================================*/

let quantidadeProduto=1;

function alterarQuantidade(valor){

quantidadeProduto+=valor;

if(quantidadeProduto<1){

quantidadeProduto=1;

}

const qtd=document.getElementById("quantidade");

if(qtd){

qtd.innerHTML=quantidadeProduto;

}

atualizarTotal();

}

/*=========================================
        CALCULAR TOTAL
=========================================*/

function atualizarTotal(){

if(!produtoAtual)return;

let total=produtos[produtoAtual].preco*quantidadeProduto;

document.querySelectorAll("input[type='checkbox']:checked")
.forEach(item=>{

total+=Number(item.dataset.preco);

});

const campo=document.getElementById("total");

if(campo){

campo.innerHTML=total.toFixed(2);

}

}

document.querySelectorAll("input[type='checkbox']").forEach(item=>{

item.addEventListener("change",atualizarTotal);

});
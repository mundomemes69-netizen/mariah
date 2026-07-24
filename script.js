/*=========================================
            HEADER AO ROLAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(255,255,255,.15)";
        header.style.boxShadow = "none";

    }

});


/*=========================================
        BOTÃO VOLTAR AO TOPO
=========================================*/

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show-top");
        backTop.style.pointerEvents = "auto";
        backTop.style.transform = "translateY(0)";

    } else {

        backTop.classList.remove("show-top");
        backTop.style.pointerEvents = "none";
        backTop.style.transform = "translateY(20px)";

    }

});


/*=========================================
            SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});/*=========================================
        ANIMAÇÃO AO ROLAR A PÁGINA
=========================================*/

const revealElements = document.querySelectorAll(

'.product-card,.build-box,.about-image,.about-content,.benefit-card,.gallery-item,.testimonial-card,.contact-info,.contact-map'

);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/*=========================================
        EFEITO NOS BOTÕES
=========================================*/

const buttons = document.querySelectorAll(

'.btn-primary,.btn-secondary,.btn-header'

);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});



/*=========================================
        CARDS DOS PRODUTOS
=========================================*/

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateX=((y-centerY)/25);

const rotateY=((centerX-x)/25);

card.style.transform=`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});

/*=========================================
        PARALLAX NO HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.4 + "px";

});


/*=========================================
        IMAGEM DO HERO
=========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});


/*=========================================
        EFEITO GLOW NOS BOTÕES
=========================================*/

document.querySelectorAll(".btn-primary,.btn-header").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.35),
transparent 45%),
linear-gradient(135deg,#5A189A,#7B2CBF)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background=
"linear-gradient(135deg,#5A189A,#7B2CBF)";

});

});


/*=========================================
        EFEITO GALERIA
=========================================*/

document.querySelectorAll(".gallery-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.boxShadow=
"0 35px 80px rgba(90,24,154,.35)";

});

item.addEventListener("mouseleave",()=>{

item.style.boxShadow="";

});

});
/*=========================================
        CONTADORES
=========================================*/

const counters=document.querySelectorAll(".info-box h3");

let started=false;

function startCounter(){

if(started) return;

const trigger=window.scrollY+window.innerHeight;

const section=document.querySelector(".about");

if(trigger>section.offsetTop){

started=true;

counters.forEach(counter=>{

const text=counter.innerText;

if(text.includes("%")){

let n=0;

const interval=setInterval(()=>{

n++;

counter.innerText=n+"%";

if(n>=100){

clearInterval(interval);

}

},20);

}

});

}

}

window.addEventListener("scroll",startCounter);
/*=========================================
        BARRA DE PROGRESSO
=========================================*/

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});


/*=========================================
        HOVER PREMIUM
=========================================*/

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 40px 80px rgba(90,24,154,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});
/*=========================================
        MENU MOBILE
=========================================*/

const menuToggle=document.querySelector(".menu-toggle");

const mobileMenu=document.querySelector(".mobile-menu");

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

menuToggle.classList.toggle("active");

});
/*=========================================
      WHATSAPP PROFISSIONAL
=========================================*/

const phone = "5511977695185"; // Troque pelo número do cliente

const message = encodeURIComponent(
"Olá! Vim pelo site e gostaria de fazer um pedido de açaí 😋🍇"
);

document.querySelectorAll(".btn-primary,.btn-header,.mobile-btn")
.forEach(button=>{

button.setAttribute(
"href",
`https://wa.me/${phone}?text=${message}`
);

button.setAttribute("target","_blank");

});
const produtos = {

tradicional:{
nome:"Açaí Tradicional",
imagem:"assets/images/produto1.jpg",
preco:24.90,
descricao:"Açaí cremoso com banana, leite condensado e granola."
},

premium:{
nome:"Açaí Premium",
imagem:"assets/images/produto2.jpg",
preco:31.90,
descricao:"Morango, Nutella, leite em pó e paçoca."
},

especial:{
nome:"Copo Especial",
imagem:"assets/images/produto3.jpg",
preco:34.90,
descricao:"Creme de ninho, kiwi, uva e morango."
},

barca:{
nome:"Barca de Açaí",
imagem:"assets/images/produto4.jpg",
preco:59.90,
descricao:"Ideal para compartilhar."
}

};
// ======================================
// PRODUTOS DA LOJA
// ======================================

const produtos = {

tradicional:{
nome:"Açaí Tradicional",
imagem:"assets/images/produto1.jpg",
preco:24.90,
descricao:"Açaí cremoso com banana, leite condensado e granola."
},


premium:{
nome:"Açaí Premium",
imagem:"assets/images/produto2.jpg",
preco:31.90,
descricao:"Morango, Nutella, leite em pó e paçoca."
},


especial:{
nome:"Copo Especial",
imagem:"assets/images/produto3.jpg",
preco:34.90,
descricao:"Creme de ninho, kiwi, uva e morango."
},


barca:{
nome:"Barca de Açaí",
imagem:"assets/images/produto4.jpg",
preco:59.90,
descricao:"Ideal para compartilhar com frutas e adicionais premium."
}

};

 function abrirProduto(id){

localStorage.setItem("produtoSelecionado", id);

window.location.href="produto.html";

}

// ===============================
// PÁGINA DO PRODUTO
// ===============================


let produtoAtual = localStorage.getItem("produtoSelecionado");


if(produtoAtual && document.getElementById("produtoNome")){


let produto = produtos[produtoAtual];


document.getElementById("produtoImagem").src = produto.imagem;

document.getElementById("produtoNome").innerHTML = produto.nome;

document.getElementById("produtoDescricao").innerHTML = produto.descricao;

document.getElementById("produtoPreco").innerHTML =
"R$ " + produto.preco.toFixed(2);


let total = produto.preco;


document.getElementById("total").innerHTML =
total.toFixed(2);



let adicionais = document.querySelectorAll("input[type='checkbox']");


 // ======================================
// CALCULO DO PRODUTO
// ======================================


let tamanhoSelecionado = 12;



let tamanhos = document.querySelectorAll(
"input[name='tamanho']"
);



tamanhos.forEach(tamanho=>{


tamanho.addEventListener("change",()=>{


tamanhoSelecionado = Number(tamanho.value);


atualizarTotal();


});


});



let adicionais = document.querySelectorAll(
"input[type='checkbox']"
);



adicionais.forEach(item=>{


item.addEventListener("change",()=>{


atualizarTotal();


});


});



function atualizarTotal(){


 let total = tamanhoSelecionado * quantidadeProduto;



adicionais.forEach(item=>{


if(item.checked){

total += Number(item.dataset.preco);

}


});



let campoTotal = document.getElementById("total");


if(campoTotal){

campoTotal.innerHTML =
total.toFixed(2);

}


}

}




 function pedirWhatsApp(){


let mensagem =
"Olá, gostaria de pedir:\n\n";


mensagem += document.getElementById("produtoNome").innerHTML;


mensagem += "\n\nAdicionais:\n";


document.querySelectorAll("input[type='checkbox']:checked")
.forEach(item=>{

mensagem += "- " + item.value + "\n";

});




mensagem += "\nTotal: R$ "
+ document.getElementById("total").innerHTML;



window.open(
"https://wa.me/SEUNUMERO?text="
+ encodeURIComponent(mensagem)
);


}
// ======================================
// CARRINHO DE COMPRAS
// ======================================


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// adicionar produto ao carrinho

function adicionarCarrinho(){


let produto = produtos[produtoAtual];


let adicionaisSelecionados = [];


document.querySelectorAll("input[type='checkbox']:checked")
.forEach(item=>{

adicionaisSelecionados.push(item.value);

});



let item = {

nome: produto.nome,

preco: Number(document.getElementById("total").innerHTML),

adicionais: adicionaisSelecionados

};



carrinho.push(item);



localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);



alert("Produto adicionado ao carrinho!");



window.location.href="carrinho.html";


}
// ======================================
// MOSTRAR CARRINHO
// ======================================


function mostrarCarrinho(){


let lista = document.getElementById("listaCarrinho");


if(!lista) return;



let total = 0;


lista.innerHTML="";



carrinho.forEach((item,index)=>{


total += item.preco;



lista.innerHTML += `

<div class="item-carrinho">

<h3>${item.nome}</h3>

<p>
Adicionais:
${item.adicionais.join(", ")}
</p>


<p>
R$ ${item.preco.toFixed(2)}
</p>


</div>

`;



});



document.getElementById("totalCarrinho").innerHTML =
total.toFixed(2);


}



mostrarCarrinho();





function finalizarPedido(){


let mensagem =
"Olá, gostaria de fazer este pedido:\n\n";



carrinho.forEach(item=>{


mensagem += 
item.nome + "\n";


mensagem +=
"Adicionais: "
+ item.adicionais.join(", ")
+"\n";


mensagem +=
"Valor: R$ "
+item.preco.toFixed(2)
+"\n\n";


});



mensagem +=
"Total: R$ "
+
document.getElementById("totalCarrinho").innerHTML;



window.open(

"https://wa.me/SEUNUMERO?text="
+
encodeURIComponent(mensagem)

);


}
// ======================================
// TAMANHOS DO AÇAÍ
// ======================================


let tamanhoSelecionado = 12;



let tamanhos = document.querySelectorAll(
"input[name='tamanho']"
);



tamanhos.forEach(tamanho=>{


tamanho.addEventListener("change",()=>{


tamanhoSelecionado = Number(tamanho.value);


atualizarTotal();


});


});





function atualizarTotal(){


let total = tamanhoSelecionado;



document.querySelectorAll(
"input[type='checkbox']:checked"
)
.forEach(item=>{


total += Number(item.dataset.preco);


});



let campoTotal = document.getElementById("total");


if(campoTotal){

campoTotal.innerHTML =
total.toFixed(2);

}


}
// ======================================
// QUANTIDADE DO PRODUTO
// ======================================


let quantidadeProduto = 1;



function alterarQuantidade(valor){


quantidadeProduto += valor;



if(quantidadeProduto < 1){

quantidadeProduto = 1;

}



document.getElementById("quantidade").innerHTML =
quantidadeProduto;



atualizarTotal();


}
// ======================================
// ABRIR PRODUTO
// ======================================

function abrirProduto(id){

    localStorage.setItem("produtoSelecionado", id);

    window.location.href = "produto.html";

}
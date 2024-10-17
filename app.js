function criacartao[categoria,pergunta,respost]{
    let container =
document .getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'
}
cartao.innerHTML =

<div class="cartao__conteudo">
<h3>${cartegoria}</h3>
<div class="cartao__conteudo__pergunta"></div>
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta"></div>
<p>${resposta}</p>
<div>
</div>

let respostaEstaVsivel=false

function viraCatao[]{
respostaEstaVsivel=!respostaEstaVsivel
cartao.classList.tooggle('active',respostaEstaVsivel)
}
cartao.addEventLIstener('click', viraCatao)
container.appndChild(cartao)


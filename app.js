function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if(de >= ate){
      alert('campo "do número" deve ser inferior ao campo "ate o número",verifique os numeros e tente novamente.');
      return;
    }
    if (quantidade > (ate - de + 1)) {
      alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
      return;
    }


let numerosSorteados = [];
for (let i = 0; i < quantidade; i++) {
    let numero = numeroAleatorio(de, ate);
    while(numerosSorteados.includes(numero)){
      numero = numeroAleatorio(de, ate);
    }

    numerosSorteados.push(numero);
}
let resultado = document.getElementById("resultado")
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`; 
alterarStatusBotao();

}


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min     
}

function alterarStatusBotao(){
 let botao = document.getElementById("btn-reiniciar")
 if(botao.classList.contains('container__botao-desabilitado')) {
  botao.classList.remove('container__botao-desabilitado');
  botao.classList.add("container__botao"); 

 }else{
  botao.classList.remove("container__botao"); 
  botao.classList.add('container__botao-desabilitado');
 }
}

function reiniciar(){
  document.getElementById("quantidade").value = '';
  document.getElementById("ate").value = '';
  document.getElementById("de").value = '';
  document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
  alterarStatusBotao();
}
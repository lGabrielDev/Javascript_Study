//function alterar as cores / alterar as classes
function trocarCor(element){
    element.classList.toggle("colorirFundoTomato"); //remove ou adiciona a class "tomato"
    element.classList.toggle("colorirFundoVerde"); //remove ou adiciona a class "verde"
}


//criando evento "click" no button. Vai ficar alternando as cores do elemento
const button = document.querySelector("button#button");
button.addEventListener("click", function(){
    //selecionamos o elemento que vamos alterar
    const div = button.parentNode.querySelector("div.quadrado");
    
    trocarCor(div);
});
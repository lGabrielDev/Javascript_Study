//selecionamos o body
const body = document.querySelector("body");


//selecionamos o button
const button = document.querySelectorAll(".sunIcon")[0];


//criando evento para o button
button.addEventListener("click", function(){
    body.classList.toggle("darkMode");

    if(body.classList.contains("darkMode")){
        localStorage.setItem("temaEscolhido", "darkTheme");
    }
    else{
        localStorage.removeItem("temaEscolhido");
    }
});


//selecionamos o item/variable do localStorage
const temaEscolhido = localStorage.getItem("temaEscolhido");

//se existir a varaible no navegador, mudar o tema pra dark.
if(temaEscolhido){
    body.classList.toggle("darkMode");
}




//function para mudar a cor do elemento para "yellow"
function corAmarelo(elemento){
    elemento.style.backgroundColor = "yellow";
}

//function para mudar a cor do elemento para "blue"
function corAzul(elemento){
    elemento.style.backgroundColor = "blue";
}


//elemento que vamos criar o evento
const div = document.querySelector("div.box");

//criando os eventos
div.addEventListener("mouseover", function(){
    corAmarelo(div);
})

div.addEventListener("mouseout", function(){
    corAzul(this); // podemos passar tanto o nome do elemento quando o this, pois estamos dentro dele.
})
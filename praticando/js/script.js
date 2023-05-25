//selecionando os elementos que vamos usar
const formulario = document.querySelector("#containerFormulario");
const inputName = document.querySelector("#inputName");
const submitButton = document.querySelector("#enviarButton");
const mensagemBoasVindas = document.querySelector("#boasVindasContainer");
const textoSpan = document.querySelector("#boasVindasSpan");
const sairButton = document.querySelector("#sairButton");


/* ------------ function para alterar as divs ------------ */
function alterarDivs(divFormulario, divMensagemBoasVindas){
    const usuarioLogado = localStorage.getItem("usuario");

    //se a variable dentro do localStorage existir...
    if(usuarioLogado != null){
        divFormulario.style.display = "none"; //esconde o form
        divMensagemBoasVindas.style.display = "block"; //mostra mensagem de boas vindas

        //substituimos o span de boas vindas, para o nome inputado
        textoSpan.textContent = localStorage.getItem("usuario");
    }
    else{
        divFormulario.style.display = "block"; //mostra o form
        divMensagemBoasVindas.style.display = "none"; //esconde a mensagem
    }
}


/* ------------ criando "click" event parao "submitButton" ------------ */
submitButton.addEventListener("click", function(e){
    e.preventDefault(); //vamos tratar esse submit button como um button qualquer.

    //criamos uma variable dentro do "localStorage"
    localStorage.setItem("usuario", inputName.value);


    //chamamos a function para mostrar e esconder as divs
    alterarDivs(formulario, mensagemBoasVindas);
});



/* ------------ criando "click" event parao "sairButton" ------------ */
sairButton.addEventListener("click", function(){
    //removemos a variable.
    localStorage.removeItem("usuario");

    alterarDivs(formulario, mensagemBoasVindas);
});



/* ------------ chamamos a function. Assim, sempre que carregar a pagina, essa function é acionada. ------------ */
alterarDivs(formulario, mensagemBoasVindas);
